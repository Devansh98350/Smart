export type Message = {
    role: "user" | "SmartGrader"
    content: string
    links?: string[]
}