export type Message = {
 role: "SmartGrader" | "user"; // Update this to match your needs
    content: string
    links?: string[]
}