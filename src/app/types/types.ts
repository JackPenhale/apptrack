export type Job = {
    jobTitle: string;
    companyName: string;
    linkToJob: string;
    createdAt: Date;
    updatedAt: Date;
    appliedAt?: string;
    status: string
    note?: string;
    id: string;
    userId: string;
};