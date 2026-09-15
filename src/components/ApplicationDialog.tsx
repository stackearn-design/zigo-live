import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { APPLICATIONS, type ApplicationType, type FieldConfig } from "@/components/application-config";
import { submitApplication } from "@/lib/onboarding.functions";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^[+]?[\d\s()-]{7,18}$/;

function validate(fields: FieldConfig[], values: Record<string, string>, consented: boolean) {
  const errors: Record<string, string> = {};

  for (const field of fields) {
    const value = (values[field.name] ?? "").trim();
    if (field.required && !value) {
      errors[field.name] = `${field.label} is required`;
      continue;
    }
    if (!value) continue;
    if (field.type === "email" && !emailPattern.test(value)) {
      errors[field.name] = "Enter a valid email address";
    }
    if (field.type === "tel" && !phonePattern.test(value)) {
      errors[field.name] = "Enter a valid phone number";
    }
    if (field.minLength && value.length < field.minLength) {
      errors[field.name] = `Please write at least ${field.minLength} characters`;
    }
  }

  if (!consented) errors["consent"] = "Please confirm your information is accurate";
  return errors;
}

type Props = {
  type: ApplicationType | null;
  onOpenChange: (open: boolean) => void;
};

export function ApplicationDialog({ type, onOpenChange }: Props) {
  const config = type ? APPLICATIONS[type] : null;
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [consented, setConsented] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const submit = useServerFn(submitApplication);

  useEffect(() => {
    if (type) {
      setValues({});
      setErrors({});
      setConsented(false);
      setSuccess(false);
      setSubmitting(false);
    }
  }, [type]);

  const setValue = (name: string, value: string) =>
    setValues((prev) => ({ ...prev, [name]: value }));

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!config || submitting) return;

    const nextErrors = validate(config.fields, values, consented);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      await submit({ data: { ...values, type: config.type } });
      setSuccess(true);
      toast.success("Your request has been submitted successfully.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog open={Boolean(type)} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border bg-popover sm:max-w-3xl">
        {config && !success && (
          <form onSubmit={handleSubmit} className="animate-rise">
            <DialogHeader className="text-left">
              <DialogTitle className="text-2xl font-bold sm:text-3xl">{config.heading}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {config.subtitle}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {config.fields.map((field) => (
                <div
                  key={field.name}
                  className={`space-y-2 ${field.full || field.type === "textarea" ? "sm:col-span-2" : ""}`}
                >
                  <Label htmlFor={field.name} className="text-sm text-muted-foreground">
                    {field.label}
                    {field.required && <span className="ml-1 text-accent">*</span>}
                  </Label>

                  {field.type === "textarea" ? (
                    <Textarea
                      id={field.name}
                      rows={4}
                      maxLength={2000}
                      value={values[field.name] ?? ""}
                      onChange={(e) => setValue(field.name, e.target.value)}
                      className="bg-secondary/50"
                    />
                  ) : field.type === "select" ? (
                    <Select
                      value={values[field.name] ?? ""}
                      onValueChange={(value) => setValue(field.name, value)}
                    >
                      <SelectTrigger id={field.name} className="bg-secondary/50">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {field.options?.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input
                      id={field.name}
                      type={field.type === "email" ? "email" : field.type === "tel" ? "tel" : "text"}
                      maxLength={255}
                      value={values[field.name] ?? ""}
                      onChange={(e) => setValue(field.name, e.target.value)}
                      className="bg-secondary/50"
                    />
                  )}

                  {errors[field.name] && (
                    <p className="text-xs text-destructive">{errors[field.name]}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3">
              <Checkbox
                id="consent"
                checked={consented}
                onCheckedChange={(checked) => setConsented(checked === true)}
              />
              <Label htmlFor="consent" className="text-sm leading-snug text-muted-foreground">
                {config.consent}
              </Label>
            </div>
            {errors["consent"] && (
              <p className="mt-2 text-xs text-destructive">{errors["consent"]}</p>
            )}

            <Button
              type="submit"
              disabled={submitting}
              className="brand-gradient mt-6 h-12 w-full text-base font-semibold text-primary-foreground hover:opacity-90"
            >
              {submitting ? (
                <>
                  <Loader2 className="mr-2 size-5 animate-spin" /> Submitting…
                </>
              ) : (
                <>
                  {config.submitLabel} <ArrowRight className="ml-2 size-5" />
                </>
              )}
            </Button>
          </form>
        )}

        {success && (
          <div className="animate-rise py-8 text-center">
            <DialogHeader className="items-center">
              <CheckCircle2 className="animate-pop size-16 text-[var(--success)]" />
              <DialogTitle className="mt-4 text-2xl font-bold">
                Application Submitted Successfully!
              </DialogTitle>
              <DialogDescription className="mx-auto max-w-md text-muted-foreground">
                Thank you for partnering with Zigo. Our team will review your request and contact
                you within 24 hours.
              </DialogDescription>
            </DialogHeader>
            <p className="mt-3 text-sm text-muted-foreground">
              Your application has been received successfully.
            </p>
            <Button
              onClick={() => onOpenChange(false)}
              className="brand-gradient mt-8 h-11 px-8 font-semibold text-primary-foreground hover:opacity-90"
            >
              Back to Zigo
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
