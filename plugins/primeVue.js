import Accordion from '@/components/lib/accordion/Accordion';
import AccordionTab from '@/components/lib/accordiontab/AccordionTab';
import AutoComplete from '@/components/lib/autocomplete/AutoComplete';
import Avatar from '@/components/lib/avatar/Avatar';
import AvatarGroup from '@/components/lib/avatargroup/AvatarGroup';
import Badge from '@/components/lib/badge/Badge';
import BadgeDirective from '@/components/lib/badgedirective/BadgeDirective';
import BlockUI from '@/components/lib/blockui/BlockUI';
import Breadcrumb from '@/components/lib/breadcrumb/Breadcrumb';
import Button from '@/components/lib/button/Button';
import Calendar from '@/components/lib/calendar/Calendar';
import Card from '@/components/lib/card/Card';
import Carousel from '@/components/lib/carousel/Carousel';
import CascadeSelect from '@/components/lib/cascadeselect/CascadeSelect';
import Chart from '@/components/lib/chart/Chart';
import Checkbox from '@/components/lib/checkbox/Checkbox';
import Chip from '@/components/lib/chip/Chip';
import Chips from '@/components/lib/chips/Chips';
import ColorPicker from '@/components/lib/colorpicker/ColorPicker';
import Column from '@/components/lib/column/Column';
import ColumnGroup from '@/components/lib/columngroup/ColumnGroup';
import PrimeVue from '@/components/lib/config/PrimeVue';
import ConfirmationService from '@/components/lib/confirmationservice/ConfirmationService';
import ConfirmDialog from '@/components/lib/confirmdialog/ConfirmDialog';
import ConfirmPopup from '@/components/lib/confirmpopup/ConfirmPopup';
import ContextMenu from '@/components/lib/contextmenu/ContextMenu';
import DataTable from '@/components/lib/datatable/DataTable';
import DataView from '@/components/lib/dataview/DataView';
import DataViewLayoutOptions from '@/components/lib/dataviewlayoutoptions/DataViewLayoutOptions';
import DeferredContent from '@/components/lib/deferredcontent/DeferredContent';
import Dialog from '@/components/lib/dialog/Dialog';
import DialogService from '@/components/lib/dialogservice/DialogService';
import Divider from '@/components/lib/divider/Divider';
import Dock from '@/components/lib/dock/Dock';
import Dropdown from '@/components/lib/dropdown/Dropdown';
import DynamicDialog from '@/components/lib/dynamicdialog/DynamicDialog';
import Editor from '@/components/lib/editor/Editor';
import Fieldset from '@/components/lib/fieldset/Fieldset';
import FileUpload from '@/components/lib/fileupload/FileUpload';
import FocusTrap from '@/components/lib/focustrap/FocusTrap';
import Galleria from '@/components/lib/galleria/Galleria';
import Image from '@/components/lib/image/Image';
import InlineMessage from '@/components/lib/inlinemessage/InlineMessage';
import Inplace from '@/components/lib/inplace/Inplace';
import InputMask from '@/components/lib/inputmask/InputMask';
import InputNumber from '@/components/lib/inputnumber/InputNumber';
import InputSwitch from '@/components/lib/inputswitch/InputSwitch';
import InputText from '@/components/lib/inputtext/InputText';
import Knob from '@/components/lib/knob/Knob';
import Listbox from '@/components/lib/listbox/Listbox';
import MegaMenu from '@/components/lib/megamenu/MegaMenu';
import Menu from '@/components/lib/menu/Menu';
import Menubar from '@/components/lib/menubar/Menubar';
import Message from '@/components/lib/message/Message';
import MultiSelect from '@/components/lib/multiselect/MultiSelect';
import OrderList from '@/components/lib/orderlist/OrderList';
import OrganizationChart from '@/components/lib/organizationchart/OrganizationChart';
import OverlayPanel from '@/components/lib/overlaypanel/OverlayPanel';
import Paginator from '@/components/lib/paginator/Paginator';
import Panel from '@/components/lib/panel/Panel';
import PanelMenu from '@/components/lib/panelmenu/PanelMenu';
import Password from '@/components/lib/password/Password';
import PickList from '@/components/lib/picklist/PickList';
import ProgressBar from '@/components/lib/progressbar/ProgressBar';
import ProgressSpinner from '@/components/lib/progressspinner/ProgressSpinner';
import RadioButton from '@/components/lib/radiobutton/RadioButton';
import Rating from '@/components/lib/rating/Rating';
import Ripple from '@/components/lib/ripple/Ripple';
import Row from '@/components/lib/row/Row';
import ScrollPanel from '@/components/lib/scrollpanel/ScrollPanel';
import ScrollTop from '@/components/lib/scrolltop/ScrollTop';
import SelectButton from '@/components/lib/selectbutton/SelectButton';
import Sidebar from '@/components/lib/sidebar/Sidebar';
import Skeleton from '@/components/lib/skeleton/Skeleton';
import Slider from '@/components/lib/slider/Slider';
import SpeedDial from '@/components/lib/speeddial/SpeedDial';
import SplitButton from '@/components/lib/splitbutton/SplitButton';
import Splitter from '@/components/lib/splitter/Splitter';
import SplitterPanel from '@/components/lib/splitterpanel/SplitterPanel';
import Steps from '@/components/lib/steps/Steps';
import StyleClass from '@/components/lib/styleclass/StyleClass';
import TabMenu from '@/components/lib/tabmenu/TabMenu';
import TabPanel from '@/components/lib/tabpanel/TabPanel';
import TabView from '@/components/lib/tabview/TabView';
import Tag from '@/components/lib/tag/Tag';
import Terminal from '@/components/lib/terminal/Terminal';
import Textarea from '@/components/lib/textarea/Textarea';
import TieredMenu from '@/components/lib/tieredmenu/TieredMenu';
import Timeline from '@/components/lib/timeline/Timeline';
import Toast from '@/components/lib/toast/Toast';
import ToastService from '@/components/lib/toastservice/ToastService';
import ToggleButton from '@/components/lib/togglebutton/ToggleButton';
import Toolbar from '@/components/lib/toolbar/Toolbar';
import Tooltip from '@/components/lib/tooltip/Tooltip';
import Tree from '@/components/lib/tree/Tree';
import TreeSelect from '@/components/lib/treeselect/TreeSelect';
import TreeTable from '@/components/lib/treetable/TreeTable';
import TriStateCheckbox from '@/components/lib/tristatecheckbox/TriStateCheckbox';
import VirtualScroller from '@/components/lib/virtualscroller/VirtualScroller';

import DocApiSection from '@/components/doc/DocApiSection';
import DocComponent from '@/components/doc/DocComponent';
import DocSectionCode from '@/components/doc/DocSectionCode';
import DocSectionNav from '@/components/doc/DocSectionNav';
import DocSections from '@/components/doc/DocSections';
import DocSectionText from '@/components/doc/DocSectionText';
import CodeHighlight from '@/components/layout/CodeHighlight';
import DevelopmentSection from '@/components/layout/DevelopmentSection';

const tailwindLight = {
    panel: {
        header: ({ props }) => ({
            class: ['flex items-center justify-between border border-gray-300 bg-gray-50 text-gray-800 rounded-tr-md rounded-tl-md', { 'p-5': !props.toggleable, 'py-3 px-5': props.toggleable }]
        }),

        title: {
            class: 'leading-none font-bold'
        },
        toggler: {
            class: 'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition-none items-center cursor-pointer inline-flex justify-center overflow-hidden relative no-underline hover:text-gray-800 hover:border-transparent hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500'
        },
        togglerIcon: {
            class: 'inline-block'
        },
        toggleableContent: {
            class: ''
        },
        content: {
            class: 'p-5 border border-gray-300 bg-white text-gray-800 border-t-0 last:rounded-br-md last:rounded-bl-md'
        }
    },
    accordion: {
        header:({ props, parent, context }) => ({
            class: [
                {
                    'select-none pointer-events-none cursor-default':props?.disabled
                }
            ]
        }),
        headerAction: ({ props, parent, context }) => ({
            class: [
                // console.log(props.disabled),
                'p-5 border border-gray-300 text-gray-800 bg-gray-50 font-bold  transition-none items-center cursor-pointer flex relative no-underline select-none bg-gray-50 border-gray-300 hover:bg-gray-100 hover:border-gray-300 hover:text-gray-800 focus:shadow-focus',
                { 'rounded-none border-t-0': !context.last && !context.first, 'rounded-tr-md rounded-tl-md': context.first, 'border-t-0': context.last ,'rounded-br-0 rounded-bl-0': !context.last},
                {
                    'rounded-br-md rounded-bl-md border-t-0': context.last && !context.active
                },
                {
                    'opacity-60':props?.disabled
                }
                
                
            ]
        }),
        headerIcon: {
            class: 'mr-2 inline-block w-4 h-4'
        },
        headerTitle: {
            class: 'leading-none'
        },
        content: ({ props, parent, context }) => ({
            class: ['p-5 border border-gray-300 bg-white text-gray-800 border-t-0 rounded-tr-none rounded-tl-none', { 'rounded-br-md rounded-bl-md border-t-0': context.last, 'rounded-br-none rounded-bl-none': !context.last }]
        })
    },
    card:{
        root:{
            class:'bg-white shadow rounded-md text-gray-800'
        },
        body:{
            class:'p-5'
        },
        title:{
            class:'font-bold text-xl mb-2'
        },
        subtitle:{
            class:'text-gray-500 mb-2 font-normal'
        },
        content:{
            class:'py-5'
        },
        footer:{
            class:'pt-5'
        }
    }
};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true, pt: tailwindLight });

    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.use(ConfirmationService);
    nuxtApp.vueApp.use(DialogService);

    nuxtApp.vueApp.directive('badge', BadgeDirective);
    nuxtApp.vueApp.directive('tooltip', Tooltip);
    nuxtApp.vueApp.directive('ripple', Ripple);
    nuxtApp.vueApp.directive('styleclass', StyleClass);
    nuxtApp.vueApp.directive('focustrap', FocusTrap);
    nuxtApp.vueApp.directive('code', CodeHighlight);

    nuxtApp.vueApp.component('Accordion', Accordion);
    nuxtApp.vueApp.component('AccordionTab', AccordionTab);
    nuxtApp.vueApp.component('Avatar', Avatar);
    nuxtApp.vueApp.component('AvatarGroup', AvatarGroup);
    nuxtApp.vueApp.component('AutoComplete', AutoComplete);
    nuxtApp.vueApp.component('Badge', Badge);
    nuxtApp.vueApp.component('BlockUI', BlockUI);
    nuxtApp.vueApp.component('Breadcrumb', Breadcrumb);
    nuxtApp.vueApp.component('Button', Button);
    nuxtApp.vueApp.component('Calendar', Calendar);
    nuxtApp.vueApp.component('Card', Card);
    nuxtApp.vueApp.component('Carousel', Carousel);
    nuxtApp.vueApp.component('CascadeSelect', CascadeSelect);
    nuxtApp.vueApp.component('Chart', Chart);
    nuxtApp.vueApp.component('Checkbox', Checkbox);
    nuxtApp.vueApp.component('Chip', Chip);
    nuxtApp.vueApp.component('Chips', Chips);
    nuxtApp.vueApp.component('ColorPicker', ColorPicker);
    nuxtApp.vueApp.component('Column', Column);
    nuxtApp.vueApp.component('ColumnGroup', ColumnGroup);
    nuxtApp.vueApp.component('ConfirmDialog', ConfirmDialog);
    nuxtApp.vueApp.component('ConfirmPopup', ConfirmPopup);
    nuxtApp.vueApp.component('ContextMenu', ContextMenu);
    nuxtApp.vueApp.component('DataTable', DataTable);
    nuxtApp.vueApp.component('DataView', DataView);
    nuxtApp.vueApp.component('DataViewLayoutOptions', DataViewLayoutOptions);
    nuxtApp.vueApp.component('DeferredContent', DeferredContent);
    nuxtApp.vueApp.component('Dialog', Dialog);
    nuxtApp.vueApp.component('DynamicDialog', DynamicDialog);
    nuxtApp.vueApp.component('Divider', Divider);
    nuxtApp.vueApp.component('Dock', Dock);
    nuxtApp.vueApp.component('Dropdown', Dropdown);
    nuxtApp.vueApp.component('Editor', Editor);
    nuxtApp.vueApp.component('Fieldset', Fieldset);
    nuxtApp.vueApp.component('FileUpload', FileUpload);
    nuxtApp.vueApp.component('Image', Image);
    nuxtApp.vueApp.component('InlineMessage', InlineMessage);
    nuxtApp.vueApp.component('Inplace', Inplace);
    nuxtApp.vueApp.component('InputMask', InputMask);
    nuxtApp.vueApp.component('InputNumber', InputNumber);
    nuxtApp.vueApp.component('InputSwitch', InputSwitch);
    nuxtApp.vueApp.component('InputText', InputText);
    nuxtApp.vueApp.component('Knob', Knob);
    nuxtApp.vueApp.component('Listbox', Listbox);
    nuxtApp.vueApp.component('MegaMenu', MegaMenu);
    nuxtApp.vueApp.component('Menu', Menu);
    nuxtApp.vueApp.component('Menubar', Menubar);
    nuxtApp.vueApp.component('Message', Message);
    nuxtApp.vueApp.component('MultiSelect', MultiSelect);
    nuxtApp.vueApp.component('OrderList', OrderList);
    nuxtApp.vueApp.component('OrganizationChart', OrganizationChart);
    nuxtApp.vueApp.component('OverlayPanel', OverlayPanel);
    nuxtApp.vueApp.component('Paginator', Paginator);
    nuxtApp.vueApp.component('Panel', Panel);
    nuxtApp.vueApp.component('PanelMenu', PanelMenu);
    nuxtApp.vueApp.component('Password', Password);
    nuxtApp.vueApp.component('PickList', PickList);
    nuxtApp.vueApp.component('ProgressBar', ProgressBar);
    nuxtApp.vueApp.component('ProgressSpinner', ProgressSpinner);
    nuxtApp.vueApp.component('RadioButton', RadioButton);
    nuxtApp.vueApp.component('Rating', Rating);
    nuxtApp.vueApp.component('Row', Row);
    nuxtApp.vueApp.component('ScrollPanel', ScrollPanel);
    nuxtApp.vueApp.component('ScrollTop', ScrollTop);
    nuxtApp.vueApp.component('SelectButton', SelectButton);
    nuxtApp.vueApp.component('Slider', Slider);
    nuxtApp.vueApp.component('Sidebar', Sidebar);
    nuxtApp.vueApp.component('Skeleton', Skeleton);
    nuxtApp.vueApp.component('SpeedDial', SpeedDial);
    nuxtApp.vueApp.component('SplitButton', SplitButton);
    nuxtApp.vueApp.component('Splitter', Splitter);
    nuxtApp.vueApp.component('SplitterPanel', SplitterPanel);
    nuxtApp.vueApp.component('Steps', Steps);
    nuxtApp.vueApp.component('TabView', TabView);
    nuxtApp.vueApp.component('TabPanel', TabPanel);
    nuxtApp.vueApp.component('TabMenu', TabMenu);
    nuxtApp.vueApp.component('Tag', Tag);
    nuxtApp.vueApp.component('Terminal', Terminal);
    nuxtApp.vueApp.component('Textarea', Textarea);
    nuxtApp.vueApp.component('TieredMenu', TieredMenu);
    nuxtApp.vueApp.component('Timeline', Timeline);
    nuxtApp.vueApp.component('Toast', Toast);
    nuxtApp.vueApp.component('Toolbar', Toolbar);
    nuxtApp.vueApp.component('ToggleButton', ToggleButton);
    nuxtApp.vueApp.component('Tree', Tree);
    nuxtApp.vueApp.component('TreeSelect', TreeSelect);
    nuxtApp.vueApp.component('TreeTable', TreeTable);
    nuxtApp.vueApp.component('TriStateCheckbox', TriStateCheckbox);
    nuxtApp.vueApp.component('Galleria', Galleria);
    nuxtApp.vueApp.component('VirtualScroller', VirtualScroller);

    nuxtApp.vueApp.component('DocSections', DocSections);
    nuxtApp.vueApp.component('DocSectionText', DocSectionText);
    nuxtApp.vueApp.component('DocSectionCode', DocSectionCode);
    nuxtApp.vueApp.component('DocSectionNav', DocSectionNav);
    nuxtApp.vueApp.component('DocApiSection', DocApiSection);
    nuxtApp.vueApp.component('DocComponent', DocComponent);

    nuxtApp.vueApp.component('DevelopmentSection', DevelopmentSection);
});
