import { describe, it, expect } from "vitest";
import { formatarMoeda } from '../utils/moeda'

describe ("formatarMoeda", () => {
    it("formatar um valor em reais", () => {
        expect(formatarMoeda(1899.99)).toContain("1.899,99");
    });

    it("formata o zero", () => {
        expect(formatarMoeda(0)).toContain("0,00");
    });

    it("dá erro quando o valor não existe", () => {
        expect(() => formatarMoeda(undefined)).toThrow();
    });
});