export declare function getAppliedTeamIds(): number[];
export declare function saveAppliedTeam(id: number): void;
export declare function removeAppliedTeam(id: number): void;
interface AppliedRecord {
    id: number;
    date: string;
}
export declare function getAppliedTeamDetails(): AppliedRecord[];
export declare function saveAppliedTeamWithDate(id: number): void;
export declare function removeAppliedTeamWithDate(id: number): void;
export {};
