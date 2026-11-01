import { describe, it, expect } from "vitest";
import { todosDigitosIguais, limparCartao } from '../utils/pagamento'

describe ("todosDigitosIguais", () => {
    it("todos digitos iguais", () => {
        expect(todosDigitosIguais("1111111111111111")).toBe(true)
    });

    it("todos digitos diferente", () => {
        expect(todosDigitosIguais("1111222233334444")).toBe(false)
    }); 
});

describe("limparCartao", () => {
    it("limpar cartao caracteres especiais", () => {
        expect(limparCartao("1234-5678-9101-1213")).toBe("1234567891011213")
    });

    it("dá erro quando não recebe texto", () => {
        expect(() => limparCartao(undefined)).toThrow();
    });
})