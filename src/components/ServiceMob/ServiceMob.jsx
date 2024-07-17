import lending from '../../assets/services/lending.svg';
import insurance from '../../assets/services/insurance.svg';
import selection from '../../assets/services/selection.svg';
import sale from '../../assets/services/sale.svg';

export default function ServiceMobComponent() {
    return (
        <>
            <div className="mb-5 sm:mb-10">
                <div className="flex flex-col rounded-[22.5px] relative aspect-w-16 aspect-h-9">
                    <img
                        src={lending}
                        alt="lending_image"
                        className="w-full h-full rounded-[22.5px]"
                    />
                    <p className="absolute font-TTNormsProBold text-white uppercase left-[21px] sm:left-[64px] bottom-[22px] sm:bottom-16 text-[28px] sm:text-5xl">
                        кредитование
                    </p>
                </div>
            </div>
            <div className="mb-5 sm:mb-10">
                <div className="flex flex-col rounded-[22.5px] relative">
                    <img
                        src={insurance}
                        alt="insurance_image"
                        className="w-full h-full rounded-[22.5px]"
                    />
                    <p className="absolute font-TTNormsProBold text-white uppercase left-[21px] sm:left-[64px] bottom-[22px] sm:bottom-16 text-[28px] sm:text-5xl">
                        страхование
                    </p>
                </div>
            </div>
            <div className="mb-5 sm:mb-10">
                <div className="flex flex-col rounded-[22.5px] relative">
                    <img
                        src={selection}
                        alt="selection_image"
                        className="w-full h-full rounded-[22.5px]"
                    />
                    <p className="absolute font-TTNormsProBold text-white uppercase left-[21px] sm:left-[64px] bottom-[22px] sm:bottom-16 text-[28px] sm:text-5xl">
                        Подбор/выкуп
                    </p>
                </div>
            </div>
            <div className="mb-5 sm:mb-10">
                <div className="flex flex-col rounded-[22.5px] relative">
                    <img
                        src={sale}
                        alt="sale_image"
                        className="w-full h-full rounded-[22.5px]"
                    />
                    <p className="absolute font-TTNormsProBold text-white uppercase left-[21px] sm:left-[64px] bottom-[22px] sm:bottom-16 text-[28px] sm:text-5xl">
                        продажа
                    </p>
                </div>
            </div>
        </>
    );
}
