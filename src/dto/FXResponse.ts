export interface IFXResponse {
    institute: number;
    lastUpdated: string;
    comparisonDate: string;
    baseCurrency: string;
    fx: Array<IForeignExchange>;
}

export interface IForeignExchange {
    currency: string;
    precision: number;
    nameI18N: string;
    exchangeRate: IExchangeRate;
    banknoteRate: IBankNoteRate;
    flags: Array<string>;
}

interface IExchangeRate {
    buy: number;
    middle: number;
    sell: number;
    indicator: number;
    lastModified: string;
}

interface IBankNoteRate {
    buy: number;
    middle: number;
    sell: number;
    indicator: number;
    lastModified: string;
}

export class FXResponse implements IFXResponse {
    institute: number;
    lastUpdated: string;
    comparisonDate: string;
    baseCurrency: string;
    fx: Array<IForeignExchange>;

    constructor(fxResponse: IFXResponse) {
        this.institute = fxResponse.institute;
        this.lastUpdated = fxResponse.lastUpdated;
        this.comparisonDate = fxResponse.comparisonDate;
        this.baseCurrency = fxResponse.baseCurrency;
        this.fx = fxResponse.fx;
    }
}