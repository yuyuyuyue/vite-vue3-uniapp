export const api = {
    getInfo(key) {
        try {
            const value = uni.getStorageSync(key)
            if (value) return value
        } catch (e) {
            console.error('getInfoError', e)
        }

    },
    setInfo(key, value) {
        if (!key || !value) return
        try {
            uni.setStorageSync(key, value)
        } catch (e) {
            console.error('setInfoErr', e)
        }
    },
    removeInfo(key) {
        if (!key) return
        try {
            uni.removeStorageSync(key)
        } catch (e) {
            console.error('removeInfoErr', e)
        }
    },
    toast(obj, time, img) {
        uni.showToast({
            title: obj?.title ?? obj,
            icon: obj?.icon ?? 'none',
            mask: true,
            duration: time ?? 1000,
            image: img ?? '',
            position: obj?.center ?? 'center'
        })
    },
    /**
     * 
     * @param {*} url 
     * @param {*} data 
     */
    jump(url = '', data = {}, flag = false) {
        console.log(`这是jump`, url)
        let str = url.includes('?') ? '&' : '?'
        for (let k in data) {
            !data[k] && (delete data[k])
            str = str + `${k}=${data[k]}&`
        }
        str = str.slice(0, str.length - 1) || ''
        try {
            !flag && uni.navigateTo({
                url: url + str ?? ''
            })
            flag && uni.redirectTo({
                url: url + str ?? ''
            })
        } catch (e) {
            console.error('jump' + e)

        }

    },
    /**
     * 
     * @param {*} obj 
     * @param {number} to page  ,
     * @param {string} class id
     * @param {number} time 
     * @returns 0 || 1
     */
    async pageScroll(obj) {
        return new Promise((res, rej) => {
            uni.pageScrollTo({
                scrollTop: obj?.to ?? obj,
                selector: obj?.class ?? obj?.id,
                duration: obj?.time ?? 300,
                success: () => {
                    res(true)
                },
                fail: (err) => {
                    rej(false)
                }
            })
        })

    }
}
