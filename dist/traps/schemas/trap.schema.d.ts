import { Document, Types } from 'mongoose';
export type TrapDocument = Trap & Document;
export declare class Trap {
    name: string;
    location: string;
    status: string;
    batteryLevel: number;
    lastDetection: string;
    connectivity: string;
    weeklyActivity: number[];
    farmerId: Types.ObjectId;
}
export declare const TrapSchema: import("mongoose").Schema<Trap, import("mongoose").Model<Trap, any, any, any, any, any, Trap>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Trap, Document<unknown, {}, Trap, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Trap & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Trap, Document<unknown, {}, Trap, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Trap & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    location?: import("mongoose").SchemaDefinitionProperty<string, Trap, Document<unknown, {}, Trap, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Trap & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<string, Trap, Document<unknown, {}, Trap, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Trap & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    batteryLevel?: import("mongoose").SchemaDefinitionProperty<number, Trap, Document<unknown, {}, Trap, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Trap & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    lastDetection?: import("mongoose").SchemaDefinitionProperty<string, Trap, Document<unknown, {}, Trap, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Trap & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    connectivity?: import("mongoose").SchemaDefinitionProperty<string, Trap, Document<unknown, {}, Trap, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Trap & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    weeklyActivity?: import("mongoose").SchemaDefinitionProperty<number[], Trap, Document<unknown, {}, Trap, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Trap & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    farmerId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Trap, Document<unknown, {}, Trap, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Trap & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Trap>;
