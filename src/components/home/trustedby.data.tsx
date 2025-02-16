interface TrustedByData {
    id: number;
    name: string;
    logoUrl: string;
}

const trustedByData: TrustedByData[] = [
    {
        id: 1,
        name: 'Company One',
        logoUrl: '/path/to/company-one-logo.png',
    },
    {
        id: 2,
        name: 'Company Two',
        logoUrl: '/path/to/company-two-logo.png',
    },
    {
        id: 3,
        name: 'Company Three',
        logoUrl: '/path/to/company-three-logo.png',
    },
    // Add more companies as needed
];

export default trustedByData;
