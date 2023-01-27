import { JournalType } from '@/types'
export default (): JournalType => ({
  isLoading: true,
  entries: [
    {
      id: '1',
      date: new Date().toDateString(),
      text: 'Aute quis esse ut nostrud qui exercitation ad quis in. Ullamco occaecat voluptate officia mollit commodo occaecat ullamco. Exercitation laboris adipisicing ut irure irure fugiat voluptate tempor do anim sint culpa pariatur. Et consectetur officia quis proident aliquip dolore id nostrud irure sit est exercitation. Dolor anim aliquip aliquip laborum.',
      picture: '',
    },
    {
      id: '2',
      date: new Date().toDateString(),
      text: 'Id sunt commodo amet et Lorem culpa dolor ut velit exercitation minim. Veniam reprehenderit laboris cillum tempor labore proident non et proident eiusmod commodo cupidatat velit do. Anim occaecat qui est qui aute exercitation non cupidatat est tempor labore.',
      picture: '',
    },
    {
      id: '3',
      date: new Date().toDateString(),
      text: 'Consectetur ullamco esse adipisicing cupidatat esse aliqua sint anim elit ipsum magna consequat minim ullamco. Minim id incididunt consectetur veniam elit ea commodo officia anim ex. Aliqua velit nostrud consequat nulla excepteur excepteur culpa do. Sint esse non non incididunt. Ut cillum ut eu sunt anim ad nostrud cupidatat esse eu consequat. Reprehenderit est minim fugiat sunt exercitation Lorem ullamco cupidatat. Incididunt ea Lorem fugiat eu duis.',
      picture: '',
    },
    {
      id: '4',
      date: new Date().toDateString(),
      text: 'Velit ullamco ea mollit consequat voluptate in. In minim amet labore aute excepteur est ut. Nisi deserunt laborum aute adipisicing dolore amet commodo eiusmod veniam dolor veniam consectetur sunt. Minim laboris amet mollit ullamco consectetur fugiat enim voluptate tempor ex proident officia.',
      picture: '',
    },
  ]
})
