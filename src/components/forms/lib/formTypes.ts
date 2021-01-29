

export type RequesterType = "company" | "investor";

export type FormValues = {
  requesterType: RequesterType;
  email: string;
  size: string;
};

export type ParsedFormValues = {
  isCompany: boolean;
  email: string;
  size: number;
  value: number;
};