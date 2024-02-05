// declare module "*.svg" {
//   const content: React.ForwardRefExoticComponent<
//     React.RefAttributes<React.SVGAttributes<SVGElement>>
//   >;
//   export default content;
// }

declare module "*.svg" {
  const content: string;
  export default content;
}
