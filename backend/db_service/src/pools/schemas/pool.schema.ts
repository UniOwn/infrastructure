import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PoolDocument = Pool & Document;

@Schema()
export class Pool {
    @Prop()
    amount: string;

    @Prop()
    address: string;

    @Prop()
    tokenId: number;

    @Prop()
    maxAmount: number;

    @Prop()
    totalAmount: number;

    @Prop()
    endTime: number;

    @Prop()
    minParticipation: number;

    @Prop()
    itemId: number;

    @Prop()
    nftAddress: string;

    @Prop()
    marketplace: string;

    @Prop()
    poolFinished: boolean;

    @Prop()
    poolSuccessful: boolean;

    @Prop()
    proposalId: string;
}

export const PoolSchema = SchemaFactory.createForClass(Pool);
