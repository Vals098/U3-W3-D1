// 1)
// string, number, boolean, null, undefined, any

// 2)
const myName: string = "Valeria"
const myAge4: number = 28
const amIStudyingTS: boolean = true

// 3)
const greet = (name: "string") => {
  return "Ciao" + name
}

// 4)
const sum = (a: number, b: number): number => {
  return a + b
} // number

// 5)
const plusIVA = (price: number): number => {
  return (price / 100) * 22 + price
}

// 6)
const concat = (string1: string, string2: string): number => {
  return (string1 + string2).length
}

// 7)
// type union permette ad una variabile di avere più tipi
// si scrive specificando quali tipi di valori potrà assumere:
const typeUnion: string | boolean = "Hi"

// 8)
const multiple: number | null | undefined = undefined

// 9)
type monthsOfTheYear =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December"

// 10)
const numbers1: number[] = [1, 2, 3]
const numbers2: Array<number> = [1, 2, 3]

// 11)
const tupula: [string, string, string, number, number] = ["a", "b", "c", 1, 2]

// 12)
// type può essere usato per rappresentare valori primitivi ma anche union e tupule
// interface viene utilizzata per oggetti e classi

// 13)
interface person {
  firstName: string
  lastName: string
  age: number
}

// 14)
interface logIn {
  email: string
  phoneNumber?: string
}

// 15)
interface student {
  name: string
  score: number
}

const students: student[] = [
  { name: "Andrew", score: 56 },
  { name: "Mary", score: 43 },
]

// 16)
interface vehicle {
  brand: string
  plate: number
}

interface Auto extends vehicle {
  year: number
}

// 17)
const myVehicle: Auto = {
  brand: "Ford",
  plate: 384659,
  year: 2006,
}

// 18)
// I generics sono placeholders che permettono di creare componenti o funzioni riutilizzabili e più versatili

// 19)
// È possibile avere più tipi generici in un interfaccia, es:
interface Values<A, B> {
  first: A
  second: B
}

// 20)
interface APIresponse<A> {
  success: boolean
  data: A
}

const response: APIresponse<string> = {
  success: true,
  data: "Hello",
}
