import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { currentSkeletonProps, WeatherCardSkeletonProps } from "./shared/interface";
import { useTheme } from "../context/ThemeContext";

export  function LoadingSkeleton({
  width = "95%",
  height = 20,
  borderRadius = 16,
  margin = "auto",
}: currentSkeletonProps) {
    const { colors } = useTheme();
  return (
    <SkeletonTheme
      baseColor={colors.mutedForeground}
      highlightColor={colors.gradientSky}
      borderRadius={borderRadius}
      duration={2}
    >
      <Skeleton
        width={width}
        height={height}
        style={{ margin, display: "block", marginTop: "20px" }}
      />
    </SkeletonTheme>
  );
}

export  function WeatherCardSkeleton({
  width = "95%",
  height = 20,
  margin="auto"
}: WeatherCardSkeletonProps) {
  const { colors } = useTheme();
  return (
    <SkeletonTheme
      baseColor={colors.foreground}
      highlightColor={colors.gradientSky}
      borderRadius={8}
      duration={2}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: 16,
          borderRadius: 12,
        }}
      >
    
        <Skeleton
          circle={true}
          width={width}
          height={height}
          style={{ margin }}
        />

        <div style={{ flex: 1 }}>
          <Skeleton
            style={{ marginBottom: 8, margin }}
            width={width}
            height={height}
          />
          <Skeleton />
        </div>

        {/* Temperature */}
        <Skeleton width={width} height={height} style={{ margin }} />
      </div>
    </SkeletonTheme>
  );
}