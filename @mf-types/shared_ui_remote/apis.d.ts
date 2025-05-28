
    export type RemoteKeys = 'shared_ui_remote/Counter';
    type PackageType<T> = T extends 'shared_ui_remote/Counter' ? typeof import('shared_ui_remote/Counter') :any;