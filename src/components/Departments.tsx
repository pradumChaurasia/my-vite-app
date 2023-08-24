// import React, { useState } from "react";
// import {
//   Checkbox,
//   Collapse,
//   List,
//   ListItemButton,
//   ListItemText,
//   ListItem,
//   Paper,
// } from "@mui/material";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";

// interface Department {
//   department: string;
//   sub_departments: string[];
// }

// interface DepartmentItemProps {
//   department: Department;
// }

// const DepartmentItem: React.FC<DepartmentItemProps> = ({ department }) => {
//   const [selected, setSelected] = useState(false);
//   const [subSelected, setSubSelected] = useState<string[]>(department.sub_departments);
//   const [open, setOpen] = useState(selected);

//   const handleSelect = () => {
//     const allSelected = department.sub_departments.every((subDept) =>
//       subSelected.includes(subDept)
//     );

//     if (allSelected) {
//       setSelected(false);
//       setSubSelected([]);
//       setOpen(false);
//     } else {
//       setSelected(true);
//       setSubSelected([...department.sub_departments]);
//       setOpen(true);
//     }
//   };

//   const handleSubSelect = (subDept: string) => {
//     const updatedSelection = subSelected.includes(subDept)
//       ? subSelected.filter((dept) => dept !== subDept)
//       : [...subSelected, subDept];

//     setSubSelected(updatedSelection);
//     setSelected(updatedSelection.length === department.sub_departments.length);
//   };

//   const handleCollapse = () => {
//     setOpen(!open);
//   };

//   return (
//     <div>
//       <ListItemButton onClick={handleCollapse}>
//         {open ? <ExpandLess /> : <ExpandMore />}
//         <Checkbox
//           checked={selected}
//           onClick={(event) => {
//             event.stopPropagation();
//             handleSelect();
//           }}
//         />
//         <ListItemText primary={department.department} />
//       </ListItemButton>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           {department.sub_departments.map((subDept) => (
//             <ListItem key={subDept}>
//               <SubDepartmentItem
//                 subDepartment={subDept}
//                 selected={subSelected.includes(subDept)}
//                 onSelect={handleSubSelect}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </Collapse>
//     </div>
//   );
// };

// interface SubDepartmentItemProps {
//   subDepartment: string;
//   selected: boolean;
//   onSelect: (subDept: string) => void;
// }

// const SubDepartmentItem: React.FC<SubDepartmentItemProps> = ({
//   subDepartment,
//   selected,
//   onSelect,
// }) => {
//   return (
//     <ListItemButton onClick={() => onSelect(subDepartment)}>
//       <Checkbox checked={selected} />
//       <ListItemText primary={subDepartment} />
//     </ListItemButton>
//   );
// };

// const DepartmentApp: React.FC = () => {
//   return (
//     <Paper elevation={3}>
//       <List>
//         {departmentData.map((dept) => (
//           <ListItem key={dept.department}>
//             <DepartmentItem department={dept} />
//           </ListItem>
//         ))}
//       </List>
//     </Paper>
//   );
// };

// const departmentData: Department[] = [
//   {
//     department: "customer_service",
//     sub_departments: ["support", "customer_success"],
//   },
//   {
//     department: "design",
//     sub_departments: ["graphic_design", "product_design", "web_design"],
//   },
// ];

// export default DepartmentApp;

import React, { useState } from "react";
import {
  Checkbox,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  ListItem,
  Paper,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

interface Department {
  department: string;
  sub_departments: string[];
}

interface DepartmentItemProps {
  department: Department;
}

const DepartmentItem: React.FC<DepartmentItemProps> = ({ department }) => {
  const [selected, setSelected] = useState(false);
  const [subSelected, setSubSelected] = useState<string[]>([]);
  const [open, setOpen] = useState(selected);

  const handleSelect = () => {
    const allSelected = department.sub_departments.every((subDept) =>
      subSelected.includes(subDept)
    );

    if (allSelected) {
      setSelected(false);
      setSubSelected([]);
      setOpen(false);
    } else {
      setSelected(true);
      setSubSelected([...department.sub_departments]);
      setOpen(true);
    }
  };

  const handleSubSelect = (subDept: string) => {
    const updatedSelection = subSelected.includes(subDept)
      ? subSelected.filter((dept) => dept !== subDept)
      : [...subSelected, subDept];

    setSubSelected(updatedSelection);
    setSelected(updatedSelection.length === department.sub_departments.length);
  };

  const handleCollapse = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItemButton onClick={handleCollapse}>
        {open ? <ExpandLess /> : <ExpandMore />}
        <Checkbox
          checked={selected}
          onClick={(event) => {
            event.stopPropagation();
            handleSelect();
          }}
        />
        <ListItemText primary={department.department} />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {department.sub_departments.map((subDept) => (
            <ListItem key={subDept}>
              <SubDepartmentItem
                subDepartment={subDept}
                selected={subSelected.includes(subDept)}
                onSelect={handleSubSelect}
              />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
};

interface SubDepartmentItemProps {
  subDepartment: string;
  selected: boolean;
  onSelect: (subDept: string) => void;
}

const SubDepartmentItem: React.FC<SubDepartmentItemProps> = ({
  subDepartment,
  selected,
  onSelect,
}) => {
  return (
    <ListItemButton onClick={() => onSelect(subDepartment)}>
      <Checkbox checked={selected} />
      <ListItemText primary={subDepartment} />
    </ListItemButton>
  );
};

const DepartmentApp: React.FC = () => {
  return (
    <Paper elevation={3}>
      <List>
        {departmentData.map((dept) => (
          <ListItem key={dept.department}>
            <DepartmentItem department={dept} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

const departmentData: Department[] = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

export default DepartmentApp;

