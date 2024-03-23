"use server";

import { toSlug } from "@/lib/utils";
import { createJobSchema } from "@/lib/validation";
import { nanoid } from "nanoid";

export async function createJobPosting(formData: FormData) {
  const values = Object.fromEntries(formData.entries());

  const {
    title,
    type,
    companyName,
    companyLogo,
    locationType,
    location,
    applicationEmail,
    applicationUrl,
    description,
    salary,
  } = createJobSchema.parse(values);
  const slug = `${toSlug(title)}-${nanoid(10)}`;
}
