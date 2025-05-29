
    export type RemoteKeys = 'shared_ui_remote/Navbar';
    type PackageType<T> = T extends 'shared_ui_remote/Navbar' ? typeof import('shared_ui_remote/Navbar') :any;