export default function imageOptimizer(
  image: string,
  width: number,
  height: number,
) {
  return image + `?w=${width}&h=${height}&fm=webp&q=75&fit=scale`;
}
