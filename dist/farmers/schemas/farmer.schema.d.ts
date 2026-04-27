import { Document } from 'mongoose';
export type FarmerDocument = Farmer & Document;
export declare class Farmer {
    name: string;
    email: string;
    password: string;
    farmName: string;
    municipality: string;
    department: string;
    hectares: number;
    cooperative: string | null;
}
export declare const FarmerSchema: import("mongoose").Schema<Farmer, import("mongoose").Model<Farmer, any, any, any, any, any, Farmer>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Farmer, Document<unknown, {}, Farmer, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Farmer & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Farmer, Document<unknown, {}, Farmer, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Farmer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, Farmer, Document<unknown, {}, Farmer, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Farmer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    password?: import("mongoose").SchemaDefinitionProperty<string, Farmer, Document<unknown, {}, Farmer, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Farmer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    farmName?: import("mongoose").SchemaDefinitionProperty<string, Farmer, Document<unknown, {}, Farmer, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Farmer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    municipality?: import("mongoose").SchemaDefinitionProperty<string, Farmer, Document<unknown, {}, Farmer, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Farmer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    department?: import("mongoose").SchemaDefinitionProperty<string, Farmer, Document<unknown, {}, Farmer, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Farmer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    hectares?: import("mongoose").SchemaDefinitionProperty<number, Farmer, Document<unknown, {}, Farmer, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Farmer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    cooperative?: import("mongoose").SchemaDefinitionProperty<string | null, Farmer, Document<unknown, {}, Farmer, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Farmer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Farmer>;
