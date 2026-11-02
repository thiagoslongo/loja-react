import { describe, it, expect } from "vitest";
import { filtrarProdutos } from '../utils/busca'

const produtos = [
    { id: 1, nome: "Sofá Annibale" },
    { id: 2, nome: "Cama Colombo" },
    { id: 3, nome: "Sofá Retrátil" },
];

describe("filtrarProdutos", () => {
    it("retorna os produtos que combinam com o termo", () => {
        expect(filtrarProdutos(produtos, "sofá")).toHaveLength(2)
    });

    it("retorna lista vazia quando o termo não existe", () => {
        expect(filtrarProdutos(produtos, "mesa")).toEqual([])
    });

    it("ignora maiúsculas e minúsculas", () => {
        expect(filtrarProdutos(produtos, "SOFÁ")).toEqual(filtrarProdutos(produtos, "sofá"))
    });
});