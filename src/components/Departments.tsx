
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';

interface Department {
  department: string;
  sub_departments: string[];
}

const departmentData: Department[] = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];

const DepartmentList: React.FC = () => {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [openDepartments, setOpenDepartments] = useState<string[]>([]);

  const handleDepartmentClick = (department: string) => {
    if (openDepartments.includes(department)) {
      setOpenDepartments(openDepartments.filter(item => item !== department));
    } else {
      setOpenDepartments([...openDepartments, department]);
    }
  };

  const handleSubDepartmentClick = (department: string, subDepartment: string) => {
    const isSelected = selectedDepartments.includes(subDepartment);
    const parentDepartment = departmentData.find((item) => item.sub_departments.includes(subDepartment))?.department;

    if (isSelected) {
      setSelectedDepartments(selectedDepartments.filter((item) => item !== subDepartment));
    } else {
      setSelectedDepartments([...selectedDepartments, subDepartment]);
    }

    if (parentDepartment) {
      const subDeps = departmentData.find(item => item.department === parentDepartment)?.sub_departments || [];
      const allSelected = subDeps.every(subDep => selectedDepartments.includes(subDep));

      if (allSelected && !selectedDepartments.includes(parentDepartment)) {
        setSelectedDepartments([...selectedDepartments, parentDepartment]);
      }
    }
  };

  const handleMainDepartmentCheckbox = (department: string) => {
    const subDepartments = departmentData.find(item => item.department === department)?.sub_departments || [];
    const allSubDepartmentsSelected = subDepartments.every(subDep => selectedDepartments.includes(subDep));

    if (!selectedDepartments.includes(department)) {
      setSelectedDepartments([...selectedDepartments, ...subDepartments, department]);
    } else {
      setSelectedDepartments(selectedDepartments.filter(dep => !subDepartments.includes(dep)));
      setSelectedDepartments(selectedDepartments.filter(dep => dep !== department));
    }
  };

  const handleUncheckParentDepartment = (department: string) => {
    const subDepartments = departmentData.find(item => item.department === department)?.sub_departments || [];
    setSelectedDepartments(selectedDepartments.filter(dep => !subDepartments.includes(dep)));
    setSelectedDepartments(selectedDepartments.filter(dep => dep !== department));
  };

  return (
    <List>
      {departmentData.map((department) => (
        <React.Fragment key={department.department}>
          <ListItem>
            <ListItemIcon onClick={() => handleDepartmentClick(department.department)}>
              {openDepartments.includes(department.department) ? <ExpandMoreIcon /> : <ChevronRightIcon />}
            </ListItemIcon>
            <Checkbox
              edge="start"
              checked={selectedDepartments.includes(department.department)}
              onClick={() => {
                if (selectedDepartments.includes(department.department)) {
                  handleUncheckParentDepartment(department.department);
                } else {
                  handleMainDepartmentCheckbox(department.department);
                }
              }}
            />
            <ListItemText primary={department.department} />
          </ListItem>
          <Collapse in={openDepartments.includes(department.department)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.sub_departments.map((subDepartment) => (
                <ListItem key={subDepartment}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={selectedDepartments.includes(subDepartment)}
                      onClick={() => handleSubDepartmentClick(department.department, subDepartment)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={subDepartment} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default DepartmentList;
