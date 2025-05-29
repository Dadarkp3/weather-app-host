interface ForecastDayCardProps {
    day: any;
    expanded: boolean;
    onToggle: () => void;
}
declare const ForecastCard: ({ day, expanded, onToggle }: ForecastDayCardProps) => import("react/jsx-runtime").JSX.Element;
export default ForecastCard;
