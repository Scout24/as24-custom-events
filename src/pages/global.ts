import * as ListPage from './listpage'

// Events that are present across all pages

/**
 * Watchlist event
 */
export const WatchlistEvent = 'AS24_WATCHLIST_EVENT'
export const WatchlistEventCountUpdate = 'WATCHLIST_COUNT_UPDATE'
export type WatchlistEventCountUpdate = {
  type: typeof WatchlistEventCountUpdate
  value: number
}
export type WatchlistEvent = WatchlistEventCountUpdate

/**
 * Indicates that the favorites client finished the initialization
 * and is ready to accept commands.
 */
export const FavoritesReady = 'FAVORITES:READY'
export type FavoritesReady = undefined

export const FavoriteAddedEvent = 'WATCHLIST:FAVORITE_ADDED'
export const FavoriteRemovedEvent = 'WATCHLIST:FAVORITE_REMOVED'

export type FavoriteAddedEventPayload = {
  type: typeof FavoriteAddedEvent
  value: string
}
export type FavoriteRemovedEventPayload = {
  type: typeof FavoriteRemovedEvent
  value: string
}

// inform compiler of the as24 custom events
declare global {
  interface DocumentEventMap {
    [WatchlistEvent]: CustomEvent<WatchlistEvent>
    [FavoritesReady]: CustomEvent<FavoritesReady>
    [FavoriteAddedEvent]: CustomEvent<FavoriteAddedEventPayload>
    [FavoriteRemovedEvent]: CustomEvent<FavoriteRemovedEventPayload>
  }
}
