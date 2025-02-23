import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Foods} from '../../models';

export const foodsActions = createActionGroup({
  source: 'Foods',
  events: {
    'Get All': emptyProps(),
    'Get All Success': props<{ foods : Foods }>(),
    'Get All Failure': props<{ error: any }>(),
  },
});

