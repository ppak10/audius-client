const theme = {
  '--background': '#EDEDED',
  '--primary': '#FF5502',
  '--primary-dark-1': '#FF5502',
  '--primary-dark-2': '#FF5502',
  '--primary-light-1': '#FF5502',
  '--primary-light-2': '#FF5502',
  '--secondary': '#FF5502',
  '--secondary-transparent': '#FF5502d9',
  '--secondary-dark-1': '#FF5502',
  '--secondary-dark-2': '#FF5502',
  '--secondary-light-1': '#FF5502',
  '--secondary-light-2': '#FF5502',
  '--neutral': '#333333',
  '--neutral-dark-1': '#78748A',
  '--neutral-dark-2': '#6A677A',
  '--neutral-dark-3': '#4D535A',
  '--neutral-light-1': '#5C5C5C',
  '--neutral-light-2': '#7A7A7A',
  '--neutral-light-3': '#999999',
  '--neutral-light-4': '#ADADAD',
  '--neutral-light-5': '#C2C2C2',
  '--neutral-light-6': '#D6D6D6',
  '--neutral-light-7': '#E0E0E0',
  '--neutral-light-8': '#EBEBEB',
  '--neutral-light-9': '#F5F5F5',
  '--neutral-light-10': '#FCFCFC',
  '--white': '#FFFFFF',
  '--accent-red': '#D0021B',
  '--accent-red-dark-1': '#AA0115',
  '--accent-red-light-1': '#D51B32',
  '--accent-green': '#0BA400',
  '--accent-green-dark-1': '#0A9400',
  '--accent-green-light-1': '#23AD1A',
  '--accent-orange': '#FF9400',
  '--accent-orange-dark-1': '#F28100',
  '--accent-orange-light-1': '#FFA70F',
  '--accent-purple': '#FF5502',
  '--primary-gradient': 'linear-gradient(315deg, #E83000 0%, #FF8924 100%)',
  '--primary-gradient-alt-1':
    'linear-gradient(315deg, #E83000 0%, #FF8924 100%)',
  '--secondary-gradient': 'linear-gradient(315deg, #E83000 0%, #FF8924 100%)',
  '--page-header-gradient-color-1': '#E83000',
  '--page-header-gradient-color-2': '#FF8924',
  '--page-header-gradient':
    'linear-gradient(-22deg, var(--page-header-gradient-color-1) 0%, var(--page-header-gradient-color-2) 100%)',
  '--page-header-text-shadow-color': 'rgba(235, 141, 47, 0.2)',
  '--page-header-text-shadow':
    '0px 2px 4px var(--page-header-text-shadow-color)',
  '--accent-red-gradient':
    'linear-gradient(315deg, var(--accent-red-dark-1) 0%, var(--accent-red-light-1) 100%)',
  '--play-button-triangle': 'var(--static-white)',
  '--action-sheet-text': 'var(--secondary)',
  '--track-slider-rail': 'var(--neutral)',
  '--track-slider-handle': 'var(--static-white)',
  '--stat-tile-text': '#ffa375',

  '--tile-shadow-1': 'rgba(133,129,153,0.1)',
  '--tile-shadow-2': '#E3E3E3',
  '--tile-shadow-3': 'rgba(133,129,153,0.25)',
  '--tile-shadow-1-alt': 'rgba(133,129,153,0.12)',

  '--currently-playing-border': '#FFFFFF',
  '--currently-playing-default-shadow': 'rgba(242,242,242,0.5)',

  '--card-image-shadow': 'rgba(133,129,153,0.75)',

  '--search-bar-background': 'rgba(255, 255, 255, 0.8)',
  '--search-bar-expanded': 'rgba(255, 255, 255, 1.0)',
  '--search-bar-border': 'rgba(143,149,152,0.1)',
  '--search-bar-shadow': 'rgba(133,129,153,0.15)',

  '--nav-column-group-header': 'var(--neutral-light-4)',
  '--nav-column-link': 'var(--neutral-dark-2)',
  '--nav-column-link-hover': 'var(--neutral-dark-3)',

  '--slider-handle': 'var(--white)',

  '--table-shadow': 'rgba(133, 129, 153, 0.15)',

  '--mask': 'rgba(243, 240, 247, .5)',
  '--skeleton-gradient':
    'linear-gradient(90deg, #F7F7F9 25%, #F2F2F4 37%, #F7F7F9 63%)',
  '--skeleton': '#F7F7F9',
  '--profile-completion-shadow-1': 'rgba(126,27,204,0.05)',
  '--profile-completion-shadow-2': 'rgba(133,129,153,0.2)',

  '--default-profile-picture-background': 'var(--neutral-light-4)',

  '--notification-border': 'rgba(133,129,153,0.2)',
  '--notification-background': '#FFFFFF',
  '--notification-border-hover': 'rgba(133,129,153,0.2)',
  '--notification-background-hover': '#FFFFFF',
  '--notification-background-box-shadow':
    '0 2px 15px -4px rgba(133,129,153,0.2)',
  '--notification-border-active': 'rgba(133,129,153,0.2)',
  '--notification-background-active': '#FAFAFA',

  '--notification-unread-border': 'rgba(126,27,204,0.3)',
  '--notification-unread-background': 'rgba(152,73,214,0.02)',
  '--notification-unread-border-hover': 'rgba(126,27,204,0.3)',
  '--notification-unread-background-hover': 'rgba(152,73,214,0.02)',
  '--notification-unread-background-box-shadow':
    '0 2px 15px -4px rgba(126,27,204,0.15)',
  '--notification-unread-border-active': 'rgba(126,27,204,0.3)',
  '--notification-unread-background-active': 'rgba(152,73,214,0.06)',

  '--page-header-gradient-1': 'rgb(252,252,252)',
  '--page-header-gradient-2': 'rgba(252,252,252,0.85)',
  '--page-header-gradient-2-alt': 'rgba(252,252,252,0.95)',
  '--next-and-previous-buttons': 'var(--neutral)',

  '--segmented-progress-bar-segment-1':
    'linear-gradient(315deg, #E83000 0%, #FF8924 100%)',
  '--segmented-progress-bar-segment-2':
    'linear-gradient(315deg, #E83000 0%, #FF8924 100%)',
  '--segmented-progress-bar-segment-3':
    'linear-gradient(315deg, #E83000 0%, #FF8924 100%)',
  '--segmented-progress-bar-segment-4':
    'linear-gradient(315deg, #E83000 0%, #FF8924 100%)',
  '--segmented-progress-bar-segment-5':
    'linear-gradient(315deg, #E83000 0%, #FF8924 100%)',
  '--segmented-progress-bar-segment-6':
    'linear-gradient(315deg, #E83000 0%, #FF8924 100%)',
  '--segmented-progress-bar-segment-7':
    'linear-gradient(315deg, #E83000 0%, #FF8924 100%)'
}

export default theme
