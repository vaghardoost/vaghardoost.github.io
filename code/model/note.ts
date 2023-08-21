import Category from "./category"

export default interface Note {
    id: string
    title: string
    category?: Category
    photo?: string
    tag: any[]
    content?: (Caption | Photo | Frame | Code | Title)[]
    author: any
    createAt: string
}

export interface RichText {
    content: RichSpan[],
    dir?: 'rtl' | 'ltr'
}

export interface RichSpan {
    text: string
    style?: RichStyle
}

interface RichStyle {
    weight?: RichWeight[]
    size?: number
    color?: string
}

export type RichWeight = 'BOLD' | 'ITALIC' | 'STRIKETHROUGH' | 'UNDERLINE'

interface Section {
    id?: string
    link?: string
    type: string
}

export interface Caption extends Section {
    type: 'caption'
    content: RichText[]
}

export interface Photo extends Section {
    type: 'photo'
    url: string
    content: RichText[]
}

export interface Frame extends Section {
    type: 'frame'
    title?: string
    status?: "warning" | "tip" | "danger" | "info" | "question" | "success"
    content: RichText[]
}

export interface Code extends Section {
    type: 'code'
    text: string
}

export interface Title extends Section {
    type: 'title'
    text: string
    header: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

