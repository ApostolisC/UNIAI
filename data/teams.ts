export interface Team {
    title: string;
    description_eng: string;
    description_gr: string;
    members: string[];
}

export const teams: Team[] = [
    {
        title: "Founders",
        description_eng: "",
        description_gr: "",
        members:['0', '1']
    },
    {
        title: "Board",
        description_eng: "",
        description_gr: "",
        members:['2', '3', '4' ]
    },
    {
        title: "Legal and Finance",
        description_eng: "The L & F department is responsible for the legal and financial matters of the organisation. Specifically, department members are in charge of managing and allocating the organisation’s financial resources for the activities of other departments. Additionally, this department handles any grant and partnership contracts, and takes on the organisation’s border compliance with the legislative Framework.\nIf you enjoy seeing the big picture and have an interest in the legal and financial field, this department is for you!\nRemember, if this sounds intriguing but you feel you may not have enough prior knowledge, don’t worry! Learning is part of the process!",
        description_gr: "Το τμήμα Νομικών και Οικονομικών είναι υπεύθυνο για τα νομικά και οικονομικά θέματα της οργάνωσης. Συγκεκριμένα, τα μέλη του τμήματος διαχειρίζονται και κατανέμουν τους οικονομικούς πόρους της οργάνωσης για τις δραστηριότητες άλλων τμημάτων. Επίσης, το τμήμα αυτό χειρίζεται κάθε επιχορήγηση και συμβάσεις συνεργασίας και φροντίζει για τη συμμόρφωση της οργάνωσης με το νομοθετικό πλαίσιο. Αν σου αρέσει να βλέπεις τη μεγάλη εικόνα και έχεις ενδιαφέρον για τον νομικό και οικονομικό τομέα, αυτό το τμήμα είναι για σένα! Αν σου φαίνεται ενδιαφέρον αλλά νιώθεις ότι δεν έχεις αρκετές γνώσεις, μην ανησυχείς! Η εκπαίδευση είναι μέρος της διαδικασίας!",
        members:['23','22' ]
    },
    {
        title: "Marketing & Social Media",
        description_eng: "The Marketing and social media department is responsible for creating the UniAI brand, taking care of both the organisation’s aesthetics and graphics, as well as its online presence. The creativity duties of the department include generating content for social media, designing campaigns to promote the organisation’s vision and mission, as well as creating merch for our members.\nWe are looking for people who are eager to explore the world of marketing: design skills and marketing knowledge, interest in social media, passion for research, writing skills and communication skills. Skills in streaming, photography and design are highly valued.",
        description_gr: "Το τμήμα Marketing & Social Media είναι υπεύθυνο για τη δημιουργία της ταυτότητας της UniAI, φροντίζοντας τόσο την αισθητική και τα γραφικά της οργάνωσης, όσο και τη διαδικτυακή της παρουσία. Οι δημιουργικές αρμοδιότητες του τμήματος περιλαμβάνουν τη δημιουργία περιεχομένου για τα κοινωνικά δίκτυα, τον σχεδιασμό καμπανιών για την προώθηση του οράματος και της αποστολής της οργάνωσης, καθώς και τη δημιουργία merchandise για τα μέλη μας.",
        members:['24', '25', '26', '27', '41', '28']
    },
    {
        title: "Partners & Sponsors",
        description_eng: "None of the things we try to achieve would be possible without our valuable partnerships. From providing much-needed snacks during breaks in our activities, to spreading our initiatives across different communication channels and partnering with companies for grand projects, the Partners & Sponsors team takes action.\nIf you have communication skills (or want to develop them), enjoy interacting and communicating with people, have an interest in sales and above all believe you can communicate UniAI’s vision to the outside world, we want you on the team!",
        description_gr: "Τίποτα από αυτά που προσπαθούμε να πετύχουμε δεν θα ήταν δυνατό χωρίς τις πολύτιμες συνεργασίες μας. Από την παροχή απαραίτητων snacks κατά τη διάρκεια των δραστηριοτήτων μας, μέχρι τη διάδοση των πρωτοβουλιών μας σε διάφορα κανάλια επικοινωνίας και τη συνεργασία με εταιρείες για μεγάλα projects, η ομάδα Partners & Sponsors αναλαμβάνει δράση.",
        members:['29', '30', '31', '32', '33', '34']
    },
    {
        title: "IT & Data",
        description_eng: "The role of the department is twofold. On the one hand, the technical part (IT) has as its main task the creation, maintenance and development of our website, the organisation and management of internal and external communication channels (Slack, Drive and Discord respectively), while at the same time, it aspires to develop a very creative development part, whose possibilities are limited only by the ideas of its members! On the other hand, the department is responsible for analysing data coming from other departments in order to create reports for stakeholders.\nWe are looking for creative individuals with technical knowledge who are interested in learning and implementing Front- and Backend technologies. In particular, we are looking for individuals who are interested in and experienced with technologies such as Figma, WordPress, Google Analytics, Microsoft Excel/Google Sheets, Power BI and Python. If you like organisation and are willing to test your technical knowledge and learn, don’t hesitate to join our department!",
        description_gr: "Ο ρόλος του τμήματος είναι διπλός, αφενός το τεχνικό κομμάτι (IT) έχει ως κύριο έργο τη δημιουργία, συντήρηση και ανάπτυξη της ιστοσελίδας μας, την οργάνωση και διαχείριση εσωτερικών και εξωτερικών καναλιών επικοινωνίας (Slack, Drive και Discord αντίστοιχα), ενώ παράλληλα φιλοδοξεί να αναπτύξει ένα πολύ δημιουργικό κομμάτι ανάπτυξης, του οποίου οι δυνατότητες περιορίζονται μόνο από τις ιδέες των μελών του. Από την άλλη, το τμήμα είναι υπεύθυνο για την ανάλυση δεδομένων που προέρχονται από άλλα τμήματα! για τη δημιουργία αναφορών για τους ενδιαφερόμενους.\nΑναζητούμε δημιουργικά άτομα με τεχνικές γνώσεις που ενδιαφέρονται να μάθουν και να εφαρμόσουν τεχνολογίες Front- και Backend Ειδικότερα, αναζητούμε άτομα που ενδιαφέρονται και έχουν εμπειρία σε τεχνολογίες όπως το Figma. WordPress, Google Analytics, Microsoft Excel/Google Sheets, Power BI και Python Εάν σας αρέσει η οργάνωση και θέλετε να δοκιμάσετε τις τεχνικές σας γνώσεις και να μάθετε, μη διστάσετε να εγγραφείτε στο τμήμα μας!",
        members:['16', '17', '18', '19', '20','21']
    },
    {
        title: "Community",
        description_eng: "The driving force of UniAI is its members, and the Community department is there for them. The department’s goal is to strengthen the sense of community and build bonds within our community, by organising internal activities that empower us as a team and by taking care of selecting suitable new members according to each department’s requirements. There are no specific skills or requirements. We are looking for individuals who are motivated, who enjoy interacting with people and organising social events from start to finish. We need people to plan and organise the recruitment process and conduct interviews. Members of the department take full ownership of their projects, promoting the initiative through their actions and interpersonal skills.",
        description_gr: "Η κινητήρια δύναμη της UniAI είναι τα μέλη της και το τμήμα του Community είναι εκεί για αυτά. Στόχος του τμήματος είναι να ενισχύσει το αίσθημα της κοινότητας και να χτίσει δεσμούς μέσα στην κοινότητά μας, οργανώνοντας εσωτερικές δραστηριότητες που μας ενδυναμώνουν ως ομάδα και φροντίζοντας να επιλέγουμε κατάλληλα νέα μέλη σύμφωνα με τις απαιτήσεις του κάθε τμήματος. Δεν υπάρχουν συγκεκριμένες δεξιότητες ή απαιτήσεις. Αναζητούμε άτομα με κίνητρα, που απολαμβάνουν την αλληλεπίδραση με τους ανθρώπους και τη διοργάνωση κοινωνικών εκδηλώσεων από την αρχή μέχρι το τέλος. Χρειαζόμαστε ανθρώπους για να σχεδιάσουν και να οργανώσουν τη διαδικασία πρόσληψης και να πραγματοποιήσουν συνεντεύξεις. Τα μέλη του τμήματος αναλαμβάνουν την πλήρη κυριότητα των έργων τους, προωθώντας την πρωτοβουλία μέσω των δράσεων και των διαπροσωπικών τους δεξιοτήτων.",
        members:['6','7', '8']
    },
    {
        title: "Education",
        description_eng: "The Education department is responsible for gathering and creating educational materials related to artificial intelligence and organising relevant workshops. At the same time, the department is responsible for curating talks and taking care of the content of educational or informative presentations and posts. Within this department there is a lot of freedom for initiatives involving research and potential actions in schools. We are looking for motivated people who want to delve deeper into issues related to artificial intelligence, seek educational materials (e.g., online courses), or even create them. So, if you have research and communication skills and want to deliver presentations and workshops for our educational events, the Education department is for you!",
        description_gr: "Το τμήμα Education είναι υπεύθυνο για τη συγκέντρωση και δημιουργία εκπαιδευτικού υλικού που σχετίζεται με την τεχνητή νοημοσύνη και τη διοργάνωση σχετικών εργαστηρίων. Παράλληλα, το τμήμα είναι υπεύθυνο για την επιμέλεια ομιλιών και τη φροντίδα του περιεχομένου εκπαιδευτικών ή ενημερωτικών παρουσιάσεων και αναρτήσεων. Μέσα σε αυτό το τμήμα υπάρχει μεγάλη ελευθερία για πρωτοβουλίες που περιλαμβάνουν έρευνα και πιθανές δράσεις στα σχολεία. Αναζητούμε άτομα με κίνητρα που θέλουν να εμβαθύνουν σε θέματα που σχετίζονται με την τεχνητή νοημοσύνη, να αναζητήσουν εκπαιδευτικό υλικό (π.χ. διαδικτυακά μαθήματα) ή ακόμα και να το δημιουργήσουν. Έτσι, εάν έχετε ερευνητικές και επικοινωνιακές δεξιότητες και θέλετε να παραδώσετε παρουσιάσεις και εργαστήρια για τις εκπαιδευτικές μας εκδηλώσεις, το τμήμα Εκπαίδευσης είναι για εσάς!",
        members:['9', '10', '11', '12', '13', '14', '15']
    },
    {
        title: "Events & Experience",
        description_eng: "The events and experience team is the one responsible for planning and organising our events. Its responsibilities, in addition to finding and booking suitable venues for the respective activities, include the broader technical coordination of the events (logistics), proposing and experimenting with new projects, and organising the largest event we aim for, our first own Makeathon.\nIf you enjoy organising, if you are creative and possess strong communication skills, have an interest in project management and want to create unforgettable experiences for those participating in our activities, do not hesitate to apply and become a member of the Events & Experience team!",
        description_gr: "Η ομάδα Events & Experience είναι αυτή που είναι υπεύθυνη για το σχεδιασμό και την οργάνωση των εκδηλώσεών μας. Στις αρμοδιότητές της, εκτός από την εύρεση και κράτηση κατάλληλων χώρων για τις αντίστοιχες δραστηριότητες, περιλαμβάνεται ο ευρύτερος τεχνικός συντονισμός των εκδηλώσεων (logistics), η πρόταση και ο πειραματισμός με νέα έργα και η διοργάνωση της μεγαλύτερης εκδήλωσης που στοχεύουμε, του πρώτου μας Makeathon.\ nΕάν σας αρέσει η οργάνωση, εάν είστε δημιουργικοί και έχετε ισχυρές δεξιότητες επικοινωνίας, ενδιαφέρεστε για τη διαχείριση έργων και θέλετε να δημιουργήσετε αξέχαστες εμπειρίες για όσους συμμετέχουν στις δραστηριότητές μας, μη διστάσετε να κάνετε αίτηση και γίνετε μέλος της ομάδας Events & Experience!",
        members:['35', '36', '37', '38', '39', '40']
    },{
        title: "Makeathon Lead",
        description_eng: "",
        description_gr: "",
        members:['5']
    },
]

export default teams;