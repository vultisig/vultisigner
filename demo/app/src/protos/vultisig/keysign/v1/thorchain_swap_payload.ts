/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.12
 * source: vultisig/keysign/v1/thorchain_swap_payload.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./coin";
import * as pb_1 from "google-protobuf";
export namespace vultisig.keysign.v1 {
    export class THORChainSwapPayload extends pb_1.Message {
        #one_of_decls: number[][] = [[5]];
        constructor(data?: any[] | ({
            from_address?: string;
            from_coin?: dependency_1.vultisig.keysign.v1.Coin;
            to_coin?: dependency_1.vultisig.keysign.v1.Coin;
            vault_address?: string;
            from_amount?: string;
            to_amount_decimal?: string;
            to_amount_limit?: string;
            streaming_interval?: string;
            streaming_quantity?: string;
            expiration_time?: number;
            is_affiliate?: boolean;
        } & (({
            router_address?: string;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("from_address" in data && data.from_address != undefined) {
                    this.from_address = data.from_address;
                }
                if ("from_coin" in data && data.from_coin != undefined) {
                    this.from_coin = data.from_coin;
                }
                if ("to_coin" in data && data.to_coin != undefined) {
                    this.to_coin = data.to_coin;
                }
                if ("vault_address" in data && data.vault_address != undefined) {
                    this.vault_address = data.vault_address;
                }
                if ("router_address" in data && data.router_address != undefined) {
                    this.router_address = data.router_address;
                }
                if ("from_amount" in data && data.from_amount != undefined) {
                    this.from_amount = data.from_amount;
                }
                if ("to_amount_decimal" in data && data.to_amount_decimal != undefined) {
                    this.to_amount_decimal = data.to_amount_decimal;
                }
                if ("to_amount_limit" in data && data.to_amount_limit != undefined) {
                    this.to_amount_limit = data.to_amount_limit;
                }
                if ("streaming_interval" in data && data.streaming_interval != undefined) {
                    this.streaming_interval = data.streaming_interval;
                }
                if ("streaming_quantity" in data && data.streaming_quantity != undefined) {
                    this.streaming_quantity = data.streaming_quantity;
                }
                if ("expiration_time" in data && data.expiration_time != undefined) {
                    this.expiration_time = data.expiration_time;
                }
                if ("is_affiliate" in data && data.is_affiliate != undefined) {
                    this.is_affiliate = data.is_affiliate;
                }
            }
        }
        get from_address() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set from_address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get from_coin() {
            return pb_1.Message.getWrapperField(this, dependency_1.vultisig.keysign.v1.Coin, 2) as dependency_1.vultisig.keysign.v1.Coin;
        }
        set from_coin(value: dependency_1.vultisig.keysign.v1.Coin) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_from_coin() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get to_coin() {
            return pb_1.Message.getWrapperField(this, dependency_1.vultisig.keysign.v1.Coin, 3) as dependency_1.vultisig.keysign.v1.Coin;
        }
        set to_coin(value: dependency_1.vultisig.keysign.v1.Coin) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_to_coin() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get vault_address() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set vault_address(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get router_address() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set router_address(value: string) {
            pb_1.Message.setOneofField(this, 5, this.#one_of_decls[0], value);
        }
        get has_router_address() {
            return pb_1.Message.getField(this, 5) != null;
        }
        get from_amount() {
            return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
        }
        set from_amount(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        get to_amount_decimal() {
            return pb_1.Message.getFieldWithDefault(this, 7, "") as string;
        }
        set to_amount_decimal(value: string) {
            pb_1.Message.setField(this, 7, value);
        }
        get to_amount_limit() {
            return pb_1.Message.getFieldWithDefault(this, 8, "") as string;
        }
        set to_amount_limit(value: string) {
            pb_1.Message.setField(this, 8, value);
        }
        get streaming_interval() {
            return pb_1.Message.getFieldWithDefault(this, 9, "") as string;
        }
        set streaming_interval(value: string) {
            pb_1.Message.setField(this, 9, value);
        }
        get streaming_quantity() {
            return pb_1.Message.getFieldWithDefault(this, 10, "") as string;
        }
        set streaming_quantity(value: string) {
            pb_1.Message.setField(this, 10, value);
        }
        get expiration_time() {
            return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
        }
        set expiration_time(value: number) {
            pb_1.Message.setField(this, 11, value);
        }
        get is_affiliate() {
            return pb_1.Message.getFieldWithDefault(this, 12, false) as boolean;
        }
        set is_affiliate(value: boolean) {
            pb_1.Message.setField(this, 12, value);
        }
        get _router_address() {
            const cases: {
                [index: number]: "none" | "router_address";
            } = {
                0: "none",
                5: "router_address"
            };
            return cases[pb_1.Message.computeOneofCase(this, [5])];
        }
        static fromObject(data: {
            from_address?: string;
            from_coin?: ReturnType<typeof dependency_1.vultisig.keysign.v1.Coin.prototype.toObject>;
            to_coin?: ReturnType<typeof dependency_1.vultisig.keysign.v1.Coin.prototype.toObject>;
            vault_address?: string;
            router_address?: string;
            from_amount?: string;
            to_amount_decimal?: string;
            to_amount_limit?: string;
            streaming_interval?: string;
            streaming_quantity?: string;
            expiration_time?: number;
            is_affiliate?: boolean;
        }): THORChainSwapPayload {
            const message = new THORChainSwapPayload({});
            if (data.from_address != null) {
                message.from_address = data.from_address;
            }
            if (data.from_coin != null) {
                message.from_coin = dependency_1.vultisig.keysign.v1.Coin.fromObject(data.from_coin);
            }
            if (data.to_coin != null) {
                message.to_coin = dependency_1.vultisig.keysign.v1.Coin.fromObject(data.to_coin);
            }
            if (data.vault_address != null) {
                message.vault_address = data.vault_address;
            }
            if (data.router_address != null) {
                message.router_address = data.router_address;
            }
            if (data.from_amount != null) {
                message.from_amount = data.from_amount;
            }
            if (data.to_amount_decimal != null) {
                message.to_amount_decimal = data.to_amount_decimal;
            }
            if (data.to_amount_limit != null) {
                message.to_amount_limit = data.to_amount_limit;
            }
            if (data.streaming_interval != null) {
                message.streaming_interval = data.streaming_interval;
            }
            if (data.streaming_quantity != null) {
                message.streaming_quantity = data.streaming_quantity;
            }
            if (data.expiration_time != null) {
                message.expiration_time = data.expiration_time;
            }
            if (data.is_affiliate != null) {
                message.is_affiliate = data.is_affiliate;
            }
            return message;
        }
        toObject() {
            const data: {
                from_address?: string;
                from_coin?: ReturnType<typeof dependency_1.vultisig.keysign.v1.Coin.prototype.toObject>;
                to_coin?: ReturnType<typeof dependency_1.vultisig.keysign.v1.Coin.prototype.toObject>;
                vault_address?: string;
                router_address?: string;
                from_amount?: string;
                to_amount_decimal?: string;
                to_amount_limit?: string;
                streaming_interval?: string;
                streaming_quantity?: string;
                expiration_time?: number;
                is_affiliate?: boolean;
            } = {};
            if (this.from_address != null) {
                data.from_address = this.from_address;
            }
            if (this.from_coin != null) {
                data.from_coin = this.from_coin.toObject();
            }
            if (this.to_coin != null) {
                data.to_coin = this.to_coin.toObject();
            }
            if (this.vault_address != null) {
                data.vault_address = this.vault_address;
            }
            if (this.router_address != null) {
                data.router_address = this.router_address;
            }
            if (this.from_amount != null) {
                data.from_amount = this.from_amount;
            }
            if (this.to_amount_decimal != null) {
                data.to_amount_decimal = this.to_amount_decimal;
            }
            if (this.to_amount_limit != null) {
                data.to_amount_limit = this.to_amount_limit;
            }
            if (this.streaming_interval != null) {
                data.streaming_interval = this.streaming_interval;
            }
            if (this.streaming_quantity != null) {
                data.streaming_quantity = this.streaming_quantity;
            }
            if (this.expiration_time != null) {
                data.expiration_time = this.expiration_time;
            }
            if (this.is_affiliate != null) {
                data.is_affiliate = this.is_affiliate;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.from_address.length)
                writer.writeString(1, this.from_address);
            if (this.has_from_coin)
                writer.writeMessage(2, this.from_coin, () => this.from_coin.serialize(writer));
            if (this.has_to_coin)
                writer.writeMessage(3, this.to_coin, () => this.to_coin.serialize(writer));
            if (this.vault_address.length)
                writer.writeString(4, this.vault_address);
            if (this.has_router_address)
                writer.writeString(5, this.router_address);
            if (this.from_amount.length)
                writer.writeString(6, this.from_amount);
            if (this.to_amount_decimal.length)
                writer.writeString(7, this.to_amount_decimal);
            if (this.to_amount_limit.length)
                writer.writeString(8, this.to_amount_limit);
            if (this.streaming_interval.length)
                writer.writeString(9, this.streaming_interval);
            if (this.streaming_quantity.length)
                writer.writeString(10, this.streaming_quantity);
            if (this.expiration_time != 0)
                writer.writeUint64(11, this.expiration_time);
            if (this.is_affiliate != false)
                writer.writeBool(12, this.is_affiliate);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): THORChainSwapPayload {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new THORChainSwapPayload();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.from_address = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.from_coin, () => message.from_coin = dependency_1.vultisig.keysign.v1.Coin.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.to_coin, () => message.to_coin = dependency_1.vultisig.keysign.v1.Coin.deserialize(reader));
                        break;
                    case 4:
                        message.vault_address = reader.readString();
                        break;
                    case 5:
                        message.router_address = reader.readString();
                        break;
                    case 6:
                        message.from_amount = reader.readString();
                        break;
                    case 7:
                        message.to_amount_decimal = reader.readString();
                        break;
                    case 8:
                        message.to_amount_limit = reader.readString();
                        break;
                    case 9:
                        message.streaming_interval = reader.readString();
                        break;
                    case 10:
                        message.streaming_quantity = reader.readString();
                        break;
                    case 11:
                        message.expiration_time = reader.readUint64();
                        break;
                    case 12:
                        message.is_affiliate = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): THORChainSwapPayload {
            return THORChainSwapPayload.deserialize(bytes);
        }
    }
}