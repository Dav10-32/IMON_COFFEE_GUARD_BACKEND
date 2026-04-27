import { Document, Types } from 'mongoose';
export type AlertDocument = Alert & Document;
export declare class Alert {
    trapId: Types.ObjectId;
    farmerId: Types.ObjectId;
    trapName: string;
    date: string;
    time: string;
    level: string;
    message: string;
    read: boolean;
}
export declare const AlertSchema: import("mongoose").Schema<Alert, import("mongoose").Model<Alert, any, any, any, any, any, Alert>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Alert, Document<unknown, {}, Alert, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Alert & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    trapId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Alert, Document<unknown, {}, Alert, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alert & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    farmerId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, Alert, Document<unknown, {}, Alert, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alert & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    trapName?: import("mongoose").SchemaDefinitionProperty<string, Alert, Document<unknown, {}, Alert, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alert & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    date?: import("mongoose").SchemaDefinitionProperty<string, Alert, Document<unknown, {}, Alert, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alert & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    time?: import("mongoose").SchemaDefinitionProperty<string, Alert, Document<unknown, {}, Alert, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alert & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    level?: import("mongoose").SchemaDefinitionProperty<string, Alert, Document<unknown, {}, Alert, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alert & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    message?: import("mongoose").SchemaDefinitionProperty<string, Alert, Document<unknown, {}, Alert, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alert & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    read?: import("mongoose").SchemaDefinitionProperty<boolean, Alert, Document<unknown, {}, Alert, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Alert & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Alert>;
