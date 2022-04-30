import { IObject } from 'src/shared/libs/types/resources/IObjects';

export interface ITileLayer {
  id: string;
  name: string;
  visible: boolean;
  attribution?: string;
  url?: string;
  layerType?: string;
  options?: any;
}

export interface IMapOptions {
  zoomSnap: number;
  zoomControl: boolean;
  attributionControl: boolean;
  layerId: string;
  zoom: number;
  minZoom: number;
  maxZoom: number;
  center: Array<number>;
  maxBounds: Array<number>;
  selectionZoom: number;
}

export interface IMapState {
  currentTileLayer: ITileLayer;
  mapInstance: any;
  minimumZoom: number;
  maximumZoom: number;
  currentZoomValue: number;
  currentZoom: number;
  currentCenterValue: Array<number>;
  currentCenter: Array<number>;
  measurmentUnit: string;
  mapTiles: Array<ITileLayer>;
  showTooltip: boolean;
  mapOptions: IMapOptions;
  onInitialize: () => void;
  onMapReady(event: any): void;
  onCenterUpdate(center: Array<Number>): void;
  onZoomUpdate(zoom: number): void;
  onMarkerActions(): void;
  onMapZoomStart(event: any): void;
  onMapZoomEnd(event: any): void;
}

export interface IUseMarkerState {
  markerDataLive: Array<IObject>;
  markerDataEvent: Array<any>;
  markerDataHistory: Array<any>;
  markerDataZone: Array<any>;
  markerDataRoute: Array<any>;
  markerTrackLive: Array<any>;
  markerTrackEvent: any;
  markerTrackHistory: any;
  markerTrackZone: any;
  markerTrackRoute: any;
  onMarkerReady: (event: any) => void;
  onMarkerMouseEnter: (event: any) => void;
  onMarkerTooltipOpen: (event: any) => void;
  onMarkerPopupClose: (event: any) => void;
  onMarkerPopupOpen: (event: any) => void;
  onZoomMarkerLive: () => void;
  onMarkerLiveSelect: (object: IObject) => void;
  getMarkerIndex: (object: IObject) => number;
  actCloseLivePopup: (object: IObject) => void;
}
