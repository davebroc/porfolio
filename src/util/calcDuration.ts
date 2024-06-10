import Months from "./Months"
export default function calcDuration(start: string, end: string): string {
    let startMonth = Months[start.substring(0, 3) as keyof typeof Months]
    let endMonth = Months[end.substring(0, 3) as keyof typeof Months]

    let startYear = start.substring(4, start.length)
    let endYear = end.substring(4, end.length)

    let yearDiff = Number.parseInt(endYear) - Number.parseInt(startYear)
    let monthDiff = endMonth - startMonth + 1

    if (monthDiff < 0) {
        monthDiff += 12
        yearDiff -= 1
    }

    let duration = `${monthDiff} mos`

    if (yearDiff > 0)
        duration = `${yearDiff} yrs, ` + duration

    return duration
}