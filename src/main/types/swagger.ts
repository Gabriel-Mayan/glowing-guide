export interface IBaseSwaggerPath {
  type: "get" | "post" | "patch" | "put" | "delete",
  tags: Array<string>,
  summary: string,
  successSchema: object,
  bodySchema?: object,
  description?: string,
  security?: Array<object>,
  parameters?: Array<object>,
}

export interface IFormatSchema {
  typeSchema: "string" | "integer" | "object" | "http",
  properties: Array<{ name: string, type: string, required: boolean }>
}
