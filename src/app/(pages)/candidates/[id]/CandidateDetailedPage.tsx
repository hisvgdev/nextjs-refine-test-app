"use client";

import React, { useEffect, useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useParams } from "next/navigation";

export default function CandidateDetailPage() {
  const { id } = useParams();
  const [candidate, setCandidate] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        const foundCandidate = data.data.find((item: any) => item.id === id);
        setCandidate(foundCandidate);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!candidate) {
    return <Typography variant="h6">Candidate not found</Typography>;
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Container sx={{ padding: 1 }} maxWidth="sm">
          <Typography variant="h4">
            {candidate.first_name} {candidate.last_name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {candidate.job_title} - {candidate.seniority_level}
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Skills
          </Typography>
          <List>
            {candidate.skills.map((skill: string, index: number) => (
              <ListItem key={index}>
                <ListItemText primary={skill} />
              </ListItem>
            ))}
          </List>
        </Container>
      </CardContent>
    </Card>
  );
}
