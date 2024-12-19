export interface Team {
    title: string;
    description: string;
    members: string[];
  }
  
  export const teams: Team[] = [
    {
      title: 'teams.founders.title',
      description: 'teams.founders.description',
      members: ['0', '1']
    },
    {
      title: 'teams.board.title',
      description: 'teams.board.description',
      members: ['2', '3', '4']
    },
    {
      title: 'teams.legalAndFinance.title',
      description: 'teams.legalAndFinance.description',
      members: ['23', '22']
    },
    {
      title: 'teams.marketingAndSocialMedia.title',
      description: 'teams.marketingAndSocialMedia.description',
      members: ['24', '25', '26', '27', '41', '28']
    },
    {
      title: 'teams.partnersAndSponsors.title',
      description: 'teams.partnersAndSponsors.description',
      members: ['29', '30', '31', '32', '33', '34']
    },
    {
      title: 'teams.itAndData.title',
      description: 'teams.itAndData.description',
      members: ['16', '17', '18', '19', '20', '21']
    },
    {
      title: 'teams.community.title',
      description: 'teams.community.description',
      members: ['6', '7', '8']
    },
    {
      title: 'teams.education.title',
      description: 'teams.education.description',
      members: ['9', '10', '11', '12', '13', '14', '15']
    },
    {
      title: 'teams.eventsAndExperience.title',
      description: 'teams.eventsAndExperience.description',
      members: ['35', '36', '37', '38', '39', '40']
    },
    {
      title: 'teams.makeathonLead.title',
      description: 'teams.makeathonLead.description',
      members: ['5']
    }
  ];
  
  export default teams;
  