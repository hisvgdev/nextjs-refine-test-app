import { Metadata } from "next";
import CandidateDetailPage from "./CandidateDetailedPage";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/data.json`);
  const { data: candidates } = await response.json();
  const candidate = candidates.find((item: any) => item.id === params.id);

  if (!candidate) {
    return {
      title: "Candidate Not Found",
      description: "The candidate you're looking for does not exist.",
    };
  }

  const { first_name, last_name, job_title } = candidate;

  return {
    title: `${first_name} ${last_name} | Memposit app`,
    description: `${first_name} ${last_name} is a ${candidate.seniority_level} ${job_title}.`,
    keywords: candidate.skills.join(", "),
    authors: [{ name: `${first_name} ${last_name}` }],
  };
}

export default function Page() {
  return <CandidateDetailPage />;
}
