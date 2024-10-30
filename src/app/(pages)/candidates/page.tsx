import React from "react";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";

export default function Candidates() {
  const filePath = path.join(process.cwd(), "public/data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const { data: candidates } = JSON.parse(jsonData);
  return (
    <Grid container spacing={2} padding={2}>
      {candidates.map((candidate: any) => (
        <Grid item xs={12} sm={6} md={4} key={candidate.id}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">
                {candidate.first_name} {candidate.last_name}
              </Typography>
              <Typography color="textSecondary">
                {candidate.job_title}
              </Typography>
              <Typography color="textSecondary">
                Level: {candidate.seniority_level}
              </Typography>
              <Link href={`/candidates/${candidate.id}`}>
                <Button variant="contained" color="primary" sx={{ mt: 1 }}>
                  View Details
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
