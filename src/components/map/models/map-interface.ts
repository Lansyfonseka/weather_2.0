interface MapInterface {
  panTo: (location: number[], config: { delay: number }) => void;
  destroy: () => void;
}

export default MapInterface;
