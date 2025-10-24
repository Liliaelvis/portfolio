export enum ContractType {
    FullTime = "Full Time",
    PartTime = "Part Time",
    Contract = "Contract",
    Freelance = "Freelance",
    Internship = "Internship",
    OwnBusiness = "Own Business"
}

export type Position = {
    position: string;
    location?: string;
    locationCoordinates?: { lat: number, lng: number };
    contractType?: ContractType;
    start: Date;
    end?: Date;
    content?: string[];
    tags?: string[];
}

export type WorkHistory = {
    company: string;
    companyWebsite?: string;
    logo?: string;
    companyDescription?: string;
    positions: Position[];
}[];