/** Estado global */
import { createReducer, on } from '@ngrx/store'

/** App imports */
import { fromSigninPageActions, fromRegisterPageActions, fromProfilePageActions } from '@store/index'
import { ProfileState } from '@core/index'

export const profileStateFeatureKey = 'profileState'

const initialState: ProfileState = {
    name: '',
    job: '',
    uid: '',
    avatar: '',
    language: ''
}

export const profileReducer = createReducer(
    initialState,
    on(
       fromSigninPageActions.loadingUser, 
       fromRegisterPageActions.loadingUser, 
       fromProfilePageActions.loadingUser,
       fromProfilePageActions.userLoadingFailed,
       fromProfilePageActions.updatingUser,
       fromProfilePageActions.userUpdatingFailed,
       fromRegisterPageActions.updatingUser,
       fromRegisterPageActions.userUpdatingFailed,
        (currentState: ProfileState) => currentState),
    on(
        fromProfilePageActions.userLoaded,
        fromSigninPageActions.userLoaded,
        fromRegisterPageActions.userLoaded,
        fromProfilePageActions.userUpdated,
        fromRegisterPageActions.userUpdated,
        (currentState: ProfileState, action) => {
            return{
                ...currentState,
                name: action.newProfile.name,
                job: action.newProfile.job,
                uid: action.newProfile.uid,
                avatar: action.newProfile.avatar,
                language: action.newProfile.language
            }
        }
    ),
)