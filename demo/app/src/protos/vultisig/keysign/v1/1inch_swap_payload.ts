/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: vultisig/keysign/v1/1inch_swap_payload.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./coin";
import * as pb_1 from "google-protobuf";
export namespace vultisig.keysign.v1 {
    export class OneInchTransaction extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            from?: string;
            to?: string;
            data?: string;
            value?: string;
            gas_price?: string;
            gas?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("from" in data && data.from != undefined) {
                    this.from = data.from;
                }
                if ("to" in data && data.to != undefined) {
                    this.to = data.to;
                }
                if ("data" in data && data.data != undefined) {
                    this.data = data.data;
                }
                if ("value" in data && data.value != undefined) {
                    this.value = data.value;
                }
                if ("gas_price" in data && data.gas_price != undefined) {
                    this.gas_price = data.gas_price;
                }
                if ("gas" in data && data.gas != undefined) {
                    this.gas = data.gas;
                }
            }
        }
        get from() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set from(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get to() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set to(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get data() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set data(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get value() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set value(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get gas_price() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set gas_price(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get gas() {
            return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
        }
        set gas(value: number) {
            pb_1.Message.setField(this, 6, value);
        }
        static fromObject(data: {
            from?: string;
            to?: string;
            data?: string;
            value?: string;
            gas_price?: string;
            gas?: number;
        }): OneInchTransaction {
            const message = new OneInchTransaction({});
            if (data.from != null) {
                message.from = data.from;
            }
            if (data.to != null) {
                message.to = data.to;
            }
            if (data.data != null) {
                message.data = data.data;
            }
            if (data.value != null) {
                message.value = data.value;
            }
            if (data.gas_price != null) {
                message.gas_price = data.gas_price;
            }
            if (data.gas != null) {
                message.gas = data.gas;
            }
            return message;
        }
        toObject() {
            const data: {
                from?: string;
                to?: string;
                data?: string;
                value?: string;
                gas_price?: string;
                gas?: number;
            } = {};
            if (this.from != null) {
                data.from = this.from;
            }
            if (this.to != null) {
                data.to = this.to;
            }
            if (this.data != null) {
                data.data = this.data;
            }
            if (this.value != null) {
                data.value = this.value;
            }
            if (this.gas_price != null) {
                data.gas_price = this.gas_price;
            }
            if (this.gas != null) {
                data.gas = this.gas;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.from.length)
                writer.writeString(1, this.from);
            if (this.to.length)
                writer.writeString(2, this.to);
            if (this.data.length)
                writer.writeString(3, this.data);
            if (this.value.length)
                writer.writeString(4, this.value);
            if (this.gas_price.length)
                writer.writeString(5, this.gas_price);
            if (this.gas != 0)
                writer.writeInt64(6, this.gas);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): OneInchTransaction {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OneInchTransaction();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.from = reader.readString();
                        break;
                    case 2:
                        message.to = reader.readString();
                        break;
                    case 3:
                        message.data = reader.readString();
                        break;
                    case 4:
                        message.value = reader.readString();
                        break;
                    case 5:
                        message.gas_price = reader.readString();
                        break;
                    case 6:
                        message.gas = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): OneInchTransaction {
            return OneInchTransaction.deserialize(bytes);
        }
    }
    export class OneInchQuote extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            dst_amount?: string;
            tx?: OneInchTransaction;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("dst_amount" in data && data.dst_amount != undefined) {
                    this.dst_amount = data.dst_amount;
                }
                if ("tx" in data && data.tx != undefined) {
                    this.tx = data.tx;
                }
            }
        }
        get dst_amount() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set dst_amount(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get tx() {
            return pb_1.Message.getWrapperField(this, OneInchTransaction, 2) as OneInchTransaction;
        }
        set tx(value: OneInchTransaction) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_tx() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            dst_amount?: string;
            tx?: ReturnType<typeof OneInchTransaction.prototype.toObject>;
        }): OneInchQuote {
            const message = new OneInchQuote({});
            if (data.dst_amount != null) {
                message.dst_amount = data.dst_amount;
            }
            if (data.tx != null) {
                message.tx = OneInchTransaction.fromObject(data.tx);
            }
            return message;
        }
        toObject() {
            const data: {
                dst_amount?: string;
                tx?: ReturnType<typeof OneInchTransaction.prototype.toObject>;
            } = {};
            if (this.dst_amount != null) {
                data.dst_amount = this.dst_amount;
            }
            if (this.tx != null) {
                data.tx = this.tx.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.dst_amount.length)
                writer.writeString(1, this.dst_amount);
            if (this.has_tx)
                writer.writeMessage(2, this.tx, () => this.tx.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): OneInchQuote {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OneInchQuote();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.dst_amount = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.tx, () => message.tx = OneInchTransaction.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): OneInchQuote {
            return OneInchQuote.deserialize(bytes);
        }
    }
    export class OneInchSwapPayload extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            from_coin?: dependency_1.vultisig.keysign.v1.Coin;
            to_coin?: dependency_1.vultisig.keysign.v1.Coin;
            from_amount?: string;
            to_amount_decimal?: string;
            quote?: OneInchQuote;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("from_coin" in data && data.from_coin != undefined) {
                    this.from_coin = data.from_coin;
                }
                if ("to_coin" in data && data.to_coin != undefined) {
                    this.to_coin = data.to_coin;
                }
                if ("from_amount" in data && data.from_amount != undefined) {
                    this.from_amount = data.from_amount;
                }
                if ("to_amount_decimal" in data && data.to_amount_decimal != undefined) {
                    this.to_amount_decimal = data.to_amount_decimal;
                }
                if ("quote" in data && data.quote != undefined) {
                    this.quote = data.quote;
                }
            }
        }
        get from_coin() {
            return pb_1.Message.getWrapperField(this, dependency_1.vultisig.keysign.v1.Coin, 1) as dependency_1.vultisig.keysign.v1.Coin;
        }
        set from_coin(value: dependency_1.vultisig.keysign.v1.Coin) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_from_coin() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get to_coin() {
            return pb_1.Message.getWrapperField(this, dependency_1.vultisig.keysign.v1.Coin, 2) as dependency_1.vultisig.keysign.v1.Coin;
        }
        set to_coin(value: dependency_1.vultisig.keysign.v1.Coin) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_to_coin() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get from_amount() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set from_amount(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get to_amount_decimal() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set to_amount_decimal(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get quote() {
            return pb_1.Message.getWrapperField(this, OneInchQuote, 5) as OneInchQuote;
        }
        set quote(value: OneInchQuote) {
            pb_1.Message.setWrapperField(this, 5, value);
        }
        get has_quote() {
            return pb_1.Message.getField(this, 5) != null;
        }
        static fromObject(data: {
            from_coin?: ReturnType<typeof dependency_1.vultisig.keysign.v1.Coin.prototype.toObject>;
            to_coin?: ReturnType<typeof dependency_1.vultisig.keysign.v1.Coin.prototype.toObject>;
            from_amount?: string;
            to_amount_decimal?: string;
            quote?: ReturnType<typeof OneInchQuote.prototype.toObject>;
        }): OneInchSwapPayload {
            const message = new OneInchSwapPayload({});
            if (data.from_coin != null) {
                message.from_coin = dependency_1.vultisig.keysign.v1.Coin.fromObject(data.from_coin);
            }
            if (data.to_coin != null) {
                message.to_coin = dependency_1.vultisig.keysign.v1.Coin.fromObject(data.to_coin);
            }
            if (data.from_amount != null) {
                message.from_amount = data.from_amount;
            }
            if (data.to_amount_decimal != null) {
                message.to_amount_decimal = data.to_amount_decimal;
            }
            if (data.quote != null) {
                message.quote = OneInchQuote.fromObject(data.quote);
            }
            return message;
        }
        toObject() {
            const data: {
                from_coin?: ReturnType<typeof dependency_1.vultisig.keysign.v1.Coin.prototype.toObject>;
                to_coin?: ReturnType<typeof dependency_1.vultisig.keysign.v1.Coin.prototype.toObject>;
                from_amount?: string;
                to_amount_decimal?: string;
                quote?: ReturnType<typeof OneInchQuote.prototype.toObject>;
            } = {};
            if (this.from_coin != null) {
                data.from_coin = this.from_coin.toObject();
            }
            if (this.to_coin != null) {
                data.to_coin = this.to_coin.toObject();
            }
            if (this.from_amount != null) {
                data.from_amount = this.from_amount;
            }
            if (this.to_amount_decimal != null) {
                data.to_amount_decimal = this.to_amount_decimal;
            }
            if (this.quote != null) {
                data.quote = this.quote.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_from_coin)
                writer.writeMessage(1, this.from_coin, () => this.from_coin.serialize(writer));
            if (this.has_to_coin)
                writer.writeMessage(2, this.to_coin, () => this.to_coin.serialize(writer));
            if (this.from_amount.length)
                writer.writeString(3, this.from_amount);
            if (this.to_amount_decimal.length)
                writer.writeString(4, this.to_amount_decimal);
            if (this.has_quote)
                writer.writeMessage(5, this.quote, () => this.quote.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): OneInchSwapPayload {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OneInchSwapPayload();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.from_coin, () => message.from_coin = dependency_1.vultisig.keysign.v1.Coin.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.to_coin, () => message.to_coin = dependency_1.vultisig.keysign.v1.Coin.deserialize(reader));
                        break;
                    case 3:
                        message.from_amount = reader.readString();
                        break;
                    case 4:
                        message.to_amount_decimal = reader.readString();
                        break;
                    case 5:
                        reader.readMessage(message.quote, () => message.quote = OneInchQuote.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): OneInchSwapPayload {
            return OneInchSwapPayload.deserialize(bytes);
        }
    }
}
