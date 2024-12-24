export interface Person {
    image: string;
    name_gr: string;
    name_en: string;
    position_gr: string;
    position_en: string;
    linkedin: string;
}

// Array of person objects
const people: Person[] = [
    {
        image: '/individuals/diomidis_spinellis-Κωστας-Ρηγανας.jpg', // Replace with actual image paths
        name_gr: 'Διομήδης Σπινέλλης',
        name_en: 'Diomidis Spinellis',
        position_gr: 'Contributor',
        position_en: 'Contributor',
        linkedin: 'https://www.linkedin.com/in/dspinellis/',
    },
    {
        image: '/individuals/George_Vouros-Andriani-Nikolaou-150x150.jpg', // Replace with actual image paths
        name_gr: 'Γεώργιος Βούρος',
        name_en: 'George Vouros',
        position_gr: 'Contributor',
        position_en: 'Contributor',
        linkedin: ''
    },
    {
        image: '/individuals/Dimitris_Karlis-Andriani-Nikolaou-150x150.png', // Replace with actual image paths
        name_gr: 'Δημήτριος Καρλής',
        name_en: 'Dimitris Karlis',
        position_gr: 'Contributor',
        position_en: 'Contributor',
        linkedin: 'https://www.linkedin.com/in/dimitris-karlis-45b9a0139/'
    },
    {
        image: '/individuals/christine_nikolaou.jpg', // Replace with actual image paths
        name_gr: 'Χριστίνα Νικολάου',
        name_en: 'Christine Nikolaou',
        position_gr: 'Mentor',
        position_en: 'Mentor',
        linkedin: 'https://www.linkedin.com/in/christinenikolaou/'
    },
    {
        image: '/individuals/Screenshot-2023-12-08-144642.png', // Replace with actual image paths
        name_gr: 'Ασπασία Γκότση',
        name_en: 'Aspasia Gkotsi',
        position_gr: 'Mentor',
        position_en: 'Mentor',
        linkedin: 'https://www.linkedin.com/in/aspasiagkotsi'
    },
    {
        image: '/individuals/photo-600x600.png', // Replace with actual image paths
        name_gr: 'Γιώργος Γιαννακόπουλος',
        name_en: 'Giorgos Giannakopoulos',
        position_gr: 'Contributor',
        position_en: 'Contributor',
        linkedin: 'https://www.linkedin.com/in/ggianna/'
    },
    {
        image: '/individuals/dimitris_vassilakis-442x450.jpeg', // Replace with actual image paths
        name_gr: 'Δημήτρης Βασιλάκης',
        name_en: 'Dimitris Vassilakis',
        position_gr: 'Contributor',
        position_en: 'Contributor',
        linkedin: 'http://linkedin.com/in/dimitri-vassilakis'
    },
    {
        image: '/individuals/1692641899053-600x600.jpg', // Replace with actual image paths
        name_gr: 'Δημήτριος Φωτεινός ',
        name_en: 'Dimitrios Foteinos',
        position_gr: 'Contributor',
        position_en: 'Contributor',
        linkedin: 'https://www.linkedin.com/in/dimitrios-foteinos-9008941b8/'
    },

    {
        image: '/individuals/Nikos_Spanos-Iraklis-Premptis-600x600.jpg', // Replace with actual image paths
        name_gr: 'Νίκος Σπανός',
        name_en: 'Nikos Spanos',
        position_gr: 'Contributor',
        position_en: 'Contributor',
        linkedin: 'https://www.linkedin.com/in/spanosnikos'
    },

    {
        image: '/individuals/ion_petropoulos-e1708352151431.png', // Replace with actual image paths
        name_gr: 'Ίων Πετρόπουλος',
        name_en: 'Ion Petropoulos',
        position_gr: 'Mentor',
        position_en: 'Mentor',
        linkedin: 'https://www.linkedin.com/in/ion-petropoulos-081a34130'
    },

    // Add more mentors as needed
];

export default people;
