import { ModeToggle } from "@/components/ui/mode-toggle";
import ReactWhite from "./../../assets/reactwhite.svg";
import ReactBlack from "./../../assets/reactblack.svg";
import { useTheme } from "@/components/ui/theme-provider";

export default function NavBar() {
  const { theme } = useTheme();

  return (
    <>
      <div className="flex justify-around mt-3">
        <img src={theme === 'dark' || theme === 'system' ? ReactWhite : ReactBlack} alt="React Logo" />
        <div className="flex justify-center gap-3">
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
