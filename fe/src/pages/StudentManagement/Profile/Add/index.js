import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box, Grid, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import Title from '~/components/Title';
import Input from '~/components/Input';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function allyProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function AddStudent() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Title title={'Thêm Học Viên'}></Title>
            <Box sx={{ width: '100%' }} mt={2}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Học Viên" {...allyProps(0)} />
                        <Tab label="Hộ Khẩu" {...allyProps(1)} />
                        <Tab label="Đối Tượng" {...allyProps(2)} />
                        <Tab label="Liên Lạc" {...allyProps(2)} />
                        <Tab label="Thông Tin Quân Nhân" {...allyProps(2)} />
                        <Tab label="Khác" {...allyProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Grid container>
                        <Input label={'Name'} />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </Box>
        </>
    );
}
