import { useTheme } from "@/contexts/ThemeContext";
import { plusIcon } from "@/helpers/icons";
import classNames from "classnames";
import { FunctionComponent } from "react";

export interface PageTabItem {
	id: string;
	name: string;
}
interface PageTabsProps {
	items: PageTabItem[];
	selectedId: string;
	onSelect: (id: string) => void;
	onAddNew: () => void;
}

const PageTabs: FunctionComponent<PageTabsProps> = ({
	items,
	selectedId,
	onSelect,
	onAddNew,
}) => {
	const { theme } = useTheme();
	return (
		<div
			className={classNames(
				"flex  items-center gap-2 rounded-full p-2 bg-card-bg-color-dark bg-glass cursor-pointer "
			)}
		>
			{items.map((item) => (
				<div
					key={item.id}
					className={classNames(
						"text-foreground px-4 py-2.5 rounded-full  font-bold text-sm",
						{
							"bg-main-tabs-bg-color ": selectedId === item.id,
							"bg-glass-inner !bg-black/30": selectedId === item.id
						}
					)}
					onClick={() => onSelect(item.id)}
				>
					{item.name}
				</div>
			))}

			<div
				onClick={onAddNew}
				className={classNames("flex items-center gap-2 p-2.5 bg-main-tabs-bg-color rounded-full cursor-pointer bg-glass", {})}
			>
				{plusIcon}
			</div>
		</div>
	);
};

export default PageTabs;
