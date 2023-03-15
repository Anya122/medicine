export default interface IVisit {
    id: number;
    serviceType: null | string;
    cabinet: string;
    beginTime: string;
    endTime: string;
    appealInfo: null | string;
    status: string | null;
    result: string | null;
    client: {
        id: number;
        password: string;
        firstName: string | null;
        sureName: string | null;
        secondName: string | null;
        email: string;
        age: number;
    };
    doctor: {
        id: number;
        password: string;
        username: string;
        firstName: string | null;
        sureName: string | null;
        secondName: string | null;
        specification: string;
    };
}