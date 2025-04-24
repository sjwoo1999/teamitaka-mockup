// ✅ 지원 상태만 저장하는 간단한 배열
const SUPPORT_KEY = "appliedTeamIds";
const APPLIED_DETAIL_KEY = "appliedTeamDetails";
export function getAppliedTeamIds() {
    const raw = localStorage.getItem(SUPPORT_KEY);
    return raw ? JSON.parse(raw) : [];
}
export function saveAppliedTeam(id) {
    const prev = getAppliedTeamIds();
    if (!prev.includes(id)) {
        localStorage.setItem(SUPPORT_KEY, JSON.stringify([...prev, id]));
    }
}
export function removeAppliedTeam(id) {
    const prev = getAppliedTeamIds();
    const updated = prev.filter((tid) => tid !== id);
    localStorage.setItem(SUPPORT_KEY, JSON.stringify(updated));
}
export function getAppliedTeamDetails() {
    const raw = localStorage.getItem(APPLIED_DETAIL_KEY);
    return raw ? JSON.parse(raw) : [];
}
export function saveAppliedTeamWithDate(id) {
    const existing = getAppliedTeamDetails();
    const already = existing.some((record) => record.id === id);
    if (!already) {
        const newRecord = {
            id,
            date: new Date().toISOString(),
        };
        localStorage.setItem(APPLIED_DETAIL_KEY, JSON.stringify([...existing, newRecord]));
    }
}
export function removeAppliedTeamWithDate(id) {
    const updated = getAppliedTeamDetails().filter((record) => record.id !== id);
    localStorage.setItem(APPLIED_DETAIL_KEY, JSON.stringify(updated));
}
